export interface Category {
	id: string;
	slug: string;
	name: string;
	description: string;
	products: number;
	created: number;
	meta?: any;
}

export interface Links {}

export interface Pagination {
	total: number;
	count: number;
	per_page: number;
	current_page: number;
	total_pages: number;
	links: Links;
}

export interface Meta {
	pagination: Pagination;
}

export interface CategoryQuery {
	data: Category[];
	meta: Meta;
}
