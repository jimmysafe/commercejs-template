export type CategoryData = {
	id: string;
	slug: string;
	name: string;
	description: string;
	products: number;
	created: number;
	meta?: any;
};

export type CategoryLinks = {};

export type CategoryPagination = {
	total: number;
	count: number;
	per_page: number;
	current_page: number;
	total_pages: number;
	links: CategoryLinks;
};

export type CategoryMeta = {
	pagination: CategoryPagination;
};

export type CategoryCategoryRootData = {
	data: CategoryData[];
	meta: CategoryMeta;
};
