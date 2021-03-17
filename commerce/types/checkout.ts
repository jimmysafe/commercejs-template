// -------------------------------------------- CHECKOUT --------------------------------------------

export interface Country {
	value: string;
	label: string | unknown;
}

export interface Region {
	value: string;
	label: string | unknown;
}

export interface ShippingOption {
	value: string;
	label: string | unknown;
}

export interface Price {
	raw: number;
	formatted: string;
	formatted_with_symbol: string;
	formatted_with_code: string;
}

export interface Conditionals {
	collects_fullname: boolean;
	collects_shipping_address: boolean;
	collects_billing_address: boolean;
	has_physical_delivery: boolean;
	has_digital_delivery: boolean;
	has_pay_what_you_want: boolean;
	has_available_discounts: boolean;
	collects_extrafields: boolean;
	is_cart_free: boolean;
}

export interface Collects {
	fullname: boolean;
	shipping_address: boolean;
	billing_address: boolean;
	extrafields: boolean;
}

export interface Has {
	physical_delivery: boolean;
	digital_delivery: boolean;
	pay_what_you_want: boolean;
	available_discounts: boolean;
}

export interface Is {
	cart_free: boolean;
}

export interface Inventory {
	managed: boolean;
	available: number;
}

export interface Media {
	type: string;
	source: string;
}

export interface Seo {
	title: string;
	description: string;
}

export interface Conditionals2 {
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
}

export interface Is2 {
	active: boolean;
	free: boolean;
	tax_exempt: boolean;
	pay_what_you_want: boolean;
	inventory_managed: boolean;
	sold_out: boolean;
}

export interface Has2 {
	digital_delivery: boolean;
	physical_delivery: boolean;
	images: boolean;
	video: boolean;
	rich_embed: boolean;
}

export interface Collects2 {
	fullname: boolean;
	shipping_address: boolean;
	billing_address: boolean;
	extrafields: boolean;
}

export interface CheckoutUrl {
	checkout: string;
	display: string;
}

export interface Category {
	id: string;
	slug: string;
	name: string;
}

export interface ImageDimensions {
	width: number;
	height: number;
}

export interface Asset {
	id: string;
	url: string;
	is_image: boolean;
	filename: string;
	file_size: number;
	file_extension: string;
	image_dimensions: ImageDimensions;
	meta: any[];
	created_at: number;
	updated_at: number;
}

export interface Product {
	id: string;
	created: number;
	updated: number;
	active: boolean;
	permalink: string;
	name: string;
	description: string;
	price: Price;
	inventory: Inventory;
	media: Media;
	sku: string;
	sort_order: number;
	seo: Seo;
	thank_you_url?: any;
	meta?: any;
	conditionals: Conditionals2;
	is: Is2;
	has: Has2;
	collects: Collects2;
	checkout_url: CheckoutUrl;
	extrafields: any[];
	variant_groups: any[];
	categories: Category[];
	assets: Asset[];
	related_products: any[];
}

export interface Currency {
	symbol: string;
	code: string;
}

export interface Settings {
	tracking_id?: any;
	linked_domains?: any;
}

export interface Google {
	settings: Settings;
}

export interface Analytics {
	google: Google;
}

export interface Has3 {
	logo: boolean;
	cover: boolean;
	analytics: boolean;
	business_description: boolean;
}

export interface Merchant {
	id: number;
	business_name: string;
	business_description: string;
	status: string;
	timezone: string;
	country: string;
	currency: Currency;
	support_email: string;
	logo: string;
	logo_shape: string;
	cover?: any;
	is_manifold: number;
	intercom: boolean;
	analytics: Analytics;
	has: Has3;
}

export interface Available {
	test_gateway: boolean;
	stripe: boolean;
	square: boolean;
	paypal: boolean;
	paymill: boolean;
	razorpay: boolean;
	manual: boolean;
}

export interface TestGateway {
	type: string;
	settings: any[];
}

export interface Settings2 {
	publishable_key: string;
}

export interface Stripe {
	type: string;
	settings: Settings2;
	cards_accepted: string[];
}

export interface Gateways {
	available: Available;
	available_count: number;
	test_gateway: TestGateway;
	stripe: Stripe;
}

export interface Price2 {
	raw: number;
	formatted: string;
	formatted_with_symbol: string;
	formatted_with_code: string;
}

export interface Regions {
	IT: string[];
	AD: string[];
	AL: string[];
	AT: string[];
	BA: string[];
	BE: string[];
	BG: string[];
	BY: string[];
	CH: string[];
	CY: string[];
	CZ: string[];
	DE: string[];
	DK: string[];
	EE: string[];
	ES: string[];
	FI: string[];
	FR: string[];
	GB: string[];
	GL: string[];
	GR: string[];
	HR: string[];
	HU: string[];
	IE: string[];
	IS: string[];
	XK: string[];
	LI: string[];
	LT: string[];
	LU: string[];
	LV: string[];
	MC: string[];
	MD: string[];
	ME: string[];
	MK: string[];
	MT: string[];
	NL: string[];
	NO: string[];
	PL: string[];
	PT: string[];
	RO: string[];
	RS: string[];
	RU: string[];
	SE: string[];
	SI: string[];
	SK: string[];
	SM: string[];
	UA: string[];
}

export interface ShippingMethod {
	id: string;
	description: string;
	price: Price2;
	countries: string[];
	regions: Regions;
}

export interface Currency2 {
	code: string;
	symbol: string;
}

export interface Subtotal {
	raw: number;
	formatted: string;
	formatted_with_symbol: string;
	formatted_with_code: string;
}

export interface Amount {
	raw: number;
	formatted: string;
	formatted_with_symbol: string;
	formatted_with_code: string;
}

export interface Tax {
	amount: Amount;
	breakdown: any[];
	included_in_price: boolean;
	zone: any[];
}

export interface Total {
	raw: number;
	formatted: string;
	formatted_with_symbol: string;
	formatted_with_code: string;
}

export interface TotalWithTax {
	raw: number;
	formatted: string;
	formatted_with_symbol: string;
	formatted_with_code: string;
}

export interface TotalDue {
	raw: number;
	formatted: string;
	formatted_with_symbol: string;
	formatted_with_code: string;
}

export interface PayWhatYouWant {
	enabled: boolean;
	minimum?: any;
	customer_set_price?: any;
}

export interface Media2 {
	type: string;
	source: string;
}

export interface Price3 {
	raw: number;
	formatted: string;
	formatted_with_symbol: string;
	formatted_with_code: string;
}

export interface LineTotal {
	raw: number;
	formatted: string;
	formatted_with_symbol: string;
	formatted_with_code: string;
}

export interface Tax2 {
	is_taxable: boolean;
	taxable_amount?: any;
	amount?: any;
	breakdown?: any;
}

export interface LineItem {
	id: string;
	product_id: string;
	name: string;
	product_name: string;
	media: Media2;
	sku: string;
	permalink: string;
	quantity: number;
	price: Price3;
	line_total: LineTotal;
	is_valid: boolean;
	tax: Tax2;
	selected_options: any[];
	variant: any[];
}

export interface Price4 {
	raw: number;
	formatted: string;
	formatted_with_symbol: string;
	formatted_with_code: string;
}

export interface Price5 {
	raw: number;
	formatted: string;
	formatted_with_symbol: string;
	formatted_with_code: string;
}

export interface Regions2 {
	IT: string[];
	AD: string[];
	AL: string[];
	AT: string[];
	BA: string[];
	BE: string[];
	BG: string[];
	BY: string[];
	CH: string[];
	CY: string[];
	CZ: string[];
	DE: string[];
	DK: string[];
	EE: string[];
	ES: string[];
	FI: string[];
	FR: string[];
	GB: string[];
	GL: string[];
	GR: string[];
	HR: string[];
	HU: string[];
	IE: string[];
	IS: string[];
	XK: string[];
	LI: string[];
	LT: string[];
	LU: string[];
	LV: string[];
	MC: string[];
	MD: string[];
	ME: string[];
	MK: string[];
	MT: string[];
	NL: string[];
	NO: string[];
	PL: string[];
	PT: string[];
	RO: string[];
	RS: string[];
	RU: string[];
	SE: string[];
	SI: string[];
	SK: string[];
	SM: string[];
	UA: string[];
}

export interface AvailableOption {
	id: string;
	description: string;
	price: Price5;
	countries: string[];
	regions: Regions2;
}

export interface Shipping {
	price: Price4;
	available_options: AvailableOption[];
}

export interface Discount {
	valid: boolean;
	type: string;
	code: string;
	value: string;
	amount_saved: Price;
	product_ids: any[];
}

export interface LiveCheckout {
	merchant_id: number;
	currency: Currency2;
	subtotal: Subtotal;
	tax: Tax;
	total: Total;
	total_with_tax: TotalWithTax;
	giftcard: any[];
	total_due: TotalDue;
	pay_what_you_want: PayWhatYouWant;
	line_items: LineItem[];
	discount: Discount | [];
	shipping: Shipping;
}

export interface Settings3 {
	tracking_id?: any;
	linked_domains?: any;
}

export interface Google2 {
	settings: Settings3;
}

export interface Analytics2 {
	google: Google2;
}

export interface Checkout {
	id: string;
	cart_id: string;
	created: number;
	expires: number;
	conditionals: Conditionals;
	collects: Collects;
	has: Has;
	is: Is;
	products: Product[];
	merchant: Merchant;
	extrafields: any[];
	gateways: Gateways;
	shipping_methods: ShippingMethod[];
	live: LiveCheckout;
	analytics: Analytics2;
}
