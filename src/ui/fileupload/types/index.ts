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
	// setFiles?: (files: File[]) => void
	icon?: boolean
	// files: File[]
}

export interface AcceptTypes {
	label: string
	value: string
}

export const acceptTypes: AcceptTypes[] = [
  { label: 'All Files', value: '*/*' },
  { label: 'Images', value: 'image/*' },
  { label: 'Videos', value: 'video/*' },
  { label: 'Audio', value: 'audio/*' },
  { label: 'PDF Documents', value: 'application/pdf' },
  { label: 'Word Documents', value: '.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
  { label: 'Excel Files', value: '.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
  { label: 'Text Files', value: 'text/*,.txt,.csv' },
  { label: 'ZIP Archives', value: 'application/zip,application/x-zip-compressed' },
]
