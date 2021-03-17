export type ProductPrice = {
	raw: number;
	formatted: string;
	formatted_with_symbol: string;
	formatted_with_code: string;
};

export type ProductInventory = {
	managed: boolean;
	available: number;
};

export type ProductMedia = {
	type: string;
	source: string;
};

export type ProductSeo = {
	title: string;
	description: string;
};

export type ProductConditionals = {
	is_active: boolean;
	is_free: boolean;
	is_tax_exempt: boolean;
	is_pay_what_you_want: boolean;
	is_inventory_managed: boolean;
	is_sold_out: boolean;
	has_digital_delivery: boolean;
	has_physical_delivery: boolean;
	has_images: boolean;
	has_video: boolean;
	has_rich_embed: boolean;
	collects_fullname: boolean;
	collects_shipping_address: boolean;
	collects_billing_address: boolean;
	collects_extrafields: boolean;
};

export type ProductIs = {
	active: boolean;
	free: boolean;
	tax_exempt: boolean;
	pay_what_you_want: boolean;
	inventory_managed: boolean;
	sold_out: boolean;
};

export type ProductHas = {
	digital_delivery: boolean;
	physical_delivery: boolean;
	images: boolean;
	video: boolean;
	rich_embed: boolean;
};

export type ProductCollects = {
	fullname: boolean;
	shipping_address: boolean;
	billing_address: boolean;
	extrafields: boolean;
};

export type ProductCheckoutUrl = {
	checkout: string;
	display: string;
};

export type ProductIs2 = {
	quantity_limited: boolean;
};

export type ProductOption = {
	id: string;
	name: string;
	price: ProductPrice;
	quantity: number;
	is: ProductIs2;
	assets: any[];
	meta?: any;
	created?: any;
	updated: number;
};

export type ProductVariantGroup = {
	id: string;
	name: string;
	meta?: any;
	created?: any;
	updated?: any;
	options: ProductOption[];
};

export type ProductCategory = {
	id: string;
	slug: string;
	name: string;
};

export type ProductImageDimensions = {
	width: number;
	height: number;
};

export type ProductAsset = {
	id: string;
	url: string;
	is_image: boolean;
	filename: string;
	file_size: number;
	file_extension: string;
	image_dimensions: ProductImageDimensions;
	meta: any[];
	created_at: number;
	updated_at: number;
};

export type ProductData = {
	id: string;
	created: number;
	updated: number;
	active: boolean;
	permalink: string;
	name: string;
	description: string;
	price: ProductPrice;
	inventory: ProductInventory;
	media: ProductMedia;
	sku: string;
	sort_order: number;
	seo: ProductSeo;
	thank_you_url?: any;
	meta?: any;
	conditionals: ProductConditionals;
	is: ProductIs;
	has: ProductHas;
	collects: ProductCollects;
	checkout_url: ProductCheckoutUrl;
	extrafields: any[];
	variant_groups: ProductVariantGroup[];
	categories: ProductCategory[];
	assets: ProductAsset[];
	related_products: any[];
};

export type ProductLinks = {};

export type ProductPagination = {
	total: number;
	count: number;
	per_page: number;
	current_page: number;
	total_pages: number;
	links: ProductLinks;
};

export type ProductMeta = {
	pagination: ProductPagination;
};

export type ProductRootData = {
	data: ProductData[];
	meta: ProductMeta;
};
