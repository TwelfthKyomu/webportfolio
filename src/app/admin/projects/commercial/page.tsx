'use client'

import CommercialProjectForm from "components/CommercialProjectForm/CommercialProjectForm";

export default function CommercialProjectsPage() {
	const handleSubmit = async (formData: FormData) => {
		try {
			const response = await fetch('/api/projects/commercial', {
				method: 'POST',
				body: formData,
			});

			if (!response.ok) {
				throw new Error('Failed to create project');
			}

			alert('Проект успешно создан!');
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error('Error creating project:', error);
			alert('Ошибка при создании проекта');
		}
	};

	return (
		<main>
			<div className="commercial">
				<h1>Добавление коммерческого проекта</h1>
				<CommercialProjectForm onSubmit={ handleSubmit }/>
			</div>
		</main>
	);
}
