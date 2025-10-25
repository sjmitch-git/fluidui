export interface AcceptType {
	all: string
	audio: string
	image: string
	video: string
	document: string[]
	compressed: string[]
	text: string[]
}

const fileUploadAcceptTypes: AcceptType = {
	all: '*',
	audio: 'audio/*',
	image: 'image/*',
	video: 'video/*',
	document: [
		'application/pdf',
		'application/msword',
		'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		'application/vnd.ms-excel',
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	],
	compressed: ['application/zip', 'application/x-rar-compressed'],
	text: ['text/plain', 'text/csv'],
}

export interface FileUploadEvent {
	target: {
		files: FileList | null
	}
}

export interface FileProps {
	files: File[]
	deleteFile: (file: File) => void
}

export interface FileUploadProps {
	label?: string
	multipleLabel?: string
	className?: string
	size?: 'md' | 'lg' | 'xl'
	accept?: string
	showMultiple?: boolean
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	setFiles?: (files: File[]) => void
	icon?: boolean
	files: File[]
}

export interface AcceptTypes {
	label: string
	value: string
}

export const acceptTypes: AcceptTypes[] = [
	{ label: 'All Files', value: '*' },
	{ label: 'Audio Files', value: 'audio/*' },
	{ label: 'Image Files', value: 'image/*' },
	{ label: 'Video Files', value: 'video/*' },
	{ label: 'PDF Documents', value: 'application/pdf' },
	{ label: 'Text Documents', value: '.txt, .doc, .docx, .odt, .rtf' },
	{ label: 'Excel Files', value: 'application/vnd.ms-excel' },
]
