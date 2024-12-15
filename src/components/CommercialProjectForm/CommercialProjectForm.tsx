import Image from 'next/image';
import React, { FC, useState, ChangeEvent, FormEvent } from 'react';

import { CreateCommercialProjectDTO } from '@/types/project.types';
import { technologiesData } from '@/types/technologies.types';

interface CommercialProjectFormProps {
    onSubmit: (data: FormData) => Promise<void>;
}

const CommercialProjectForm: FC<CommercialProjectFormProps> = (props) => {
	const { onSubmit} = props;
    const [formData, setFormData] = useState<CreateCommercialProjectDTO>({
        name: '',
        description: '',
        technologies: [],
        liveUrl: '',
        image: null,
    });

		const getAllTechnologies = () =>
			Object.values(technologiesData)
				.flatMap((category) => Object.values(category))
				.flat();

    const [imagePreview, setImagePreview] = useState('');
    const [techSuggestions, setTechSuggestions] = useState<string[]>([]);

	const updateField = <K extends keyof CreateCommercialProjectDTO>(key: K, value: CreateCommercialProjectDTO[K]) =>
		setFormData(prev => ({ ...prev, [key]: value }));

    const filterTechnologies = (input: string) => {
        const normalizedInput = input.toLowerCase();

        return getAllTechnologies().filter(tech => tech.toLowerCase().includes(normalizedInput));
    };

    const handleTechChange = (value: string) => {
        setTechSuggestions(
            value ? filterTechnologies(value).slice(0, 10) : []
        );
    };

    const addTechnology = (techToAdd: string) => {
        const trimmedTech = techToAdd.trim();

        if (trimmedTech && !formData.technologies.includes(trimmedTech)) {
            updateField('technologies', [...formData.technologies, trimmedTech]);
            setTechSuggestions([]);
        }
    };

    const removeTechnology = (techToRemove: string) => {
        updateField('technologies', formData.technologies.filter(t => t !== techToRemove));
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            updateField('image', e.target.files?.[0]);
            setImagePreview(URL.createObjectURL(e.target.files?.[0]));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formDataToSubmit = new FormData();

        (Object.keys(formData) as Array<keyof CreateCommercialProjectDTO>).forEach(key => {
            const value = formData[key];

            if (value !== null && value !== undefined) {
                if (key === 'image' && value instanceof File) {
                    formDataToSubmit.append(key, value);
                } else if (typeof value === 'string') {
                    formDataToSubmit.append(key, value);
                } else if (Array.isArray(value)) {
                    value.forEach((item, index) => {
                        formDataToSubmit.append(`${key}[${index}]`, item);
                    });
                }
            }
        });

        await onSubmit(formDataToSubmit);
    };

    return (
        <form onSubmit={ handleSubmit } className="commercial-form">
            { (['name', 'description', 'liveUrl'] as const).map((field) => (
                <div key={ field } className="commercial-form-field">
                    <label htmlFor={ field } className="commercial-form-label">
                        { {
                            name: 'Название проекта',
                            description: 'Описание',
                            liveUrl: 'URL проекта'
                        }[field] }
                    </label>
                    { field === 'description' ? (
                        <textarea
                            id={ field }
                            value={ formData[field] }
                            onChange={ (e) => updateField(field, e.target.value) }
                            required
                            rows={ 4 }
                            className="commercial-form-textarea"
                        />
                    ) : (
                        <input
                            id={ field }
                            type={ field === 'liveUrl' ? 'url' : 'text' }
                            value={ formData[field] }
                            onChange={ (e) => updateField(field, e.target.value) }
                            required
                            className="commercial-form-input"
                        />
                    ) }
                </div>
            )) }
            <div className="commercial-form-field">
                <label htmlFor="tech" className="commercial-form-label">Технологии</label>
                <div className="commercial-form-entry">
                    <input
                        id="tech"
                        type="text"
                        onChange={ (e) => handleTechChange(e.target.value) }
                        className="commercial-form-input"
                    />
                    <button
                        type="button"
                        className="commercial-form-submit"
                    >
                        Добавить
                    </button>
                </div>
                { techSuggestions.length > 0 && (
                    <div className="commercial-form-tech-suggestions">
                        { techSuggestions.map((suggestion) => (
                            <button
                                key={ suggestion }
                                onClick={ () => addTechnology(suggestion) }
                                className="commercial-form-tech-suggestion-item"
                                type="button"
                            >
                                { suggestion }
                            </button>
                        )) }
                    </div>
                ) }
                { formData.technologies.length > 0 && (
                    <div className="commercial-form-technologies">
                        { formData.technologies.map((t) => (
                            <button
                                key={ t }
                                type="button"
                                onClick={ () => removeTechnology(t) }
                                className="commercial-form-technologies-item"
                            >
                                { t } <span className="commercial-form-technologies-item-remove">×</span>
                            </button>
                        )) }
                    </div>
                ) }
            </div>
            <div className="commercial-form-field">
	            <label htmlFor="image" className="commercial-form-input">
		            { formData.image ? 'Файл выбран' : 'Выберите файл' }
	            </label>
	            <input
		            id="image"
		            type="file"
		            accept="image/*"
		            onChange={ handleImageChange }
                    className="commercial-form-input-file"
	            />
                { imagePreview && <Image src={ imagePreview } alt="Preview" fill /> }
            </div>
            <button type="submit" className="commercial-form-submit">Сохранить проект</button>
        </form>
    );
};

export default CommercialProjectForm;