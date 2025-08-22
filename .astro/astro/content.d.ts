declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"essays": {
"Capitalism, Communism, and the Extitutional Stakes of Our Politics.md": {
	id: "Capitalism, Communism, and the Extitutional Stakes of Our Politics.md";
  slug: "capitalism-communism-and-the-extitutional-stakes-of-our-politics";
  body: string;
  collection: "essays";
  data: any
} & { render(): Render[".md"] };
"Concrete Pluralism.md": {
	id: "Concrete Pluralism.md";
  slug: "concrete-pluralism";
  body: string;
  collection: "essays";
  data: any
} & { render(): Render[".md"] };
"ETHEREUM IS POSTHUMAN.md": {
	id: "ETHEREUM IS POSTHUMAN.md";
  slug: "ethereum-is-posthuman";
  body: string;
  collection: "essays";
  data: any
} & { render(): Render[".md"] };
"FRIENDS of the OUTSIDE.md": {
	id: "FRIENDS of the OUTSIDE.md";
  slug: "friends-of-the-outside";
  body: string;
  collection: "essays";
  data: any
} & { render(): Render[".md"] };
"Fourth of July in Network Space.md": {
	id: "Fourth of July in Network Space.md";
  slug: "fourth-of-july-in-network-space";
  body: string;
  collection: "essays";
  data: any
} & { render(): Render[".md"] };
"Haptic Vision & Network State at ETHDenver.md": {
	id: "Haptic Vision & Network State at ETHDenver.md";
  slug: "haptic-vision--network-state-at-ethdenver";
  body: string;
  collection: "essays";
  data: any
} & { render(): Render[".md"] };
"Notes Toward an Ethereum Metaphysics.md": {
	id: "Notes Toward an Ethereum Metaphysics.md";
  slug: "notes-toward-an-ethereum-metaphysics";
  body: string;
  collection: "essays";
  data: any
} & { render(): Render[".md"] };
"On the Ontological Stakes of the Moloch Meme.md": {
	id: "On the Ontological Stakes of the Moloch Meme.md";
  slug: "on-the-ontological-stakes-of-the-moloch-meme";
  body: string;
  collection: "essays";
  data: any
} & { render(): Render[".md"] };
"Regenerative Design in the Many Worlds.md": {
	id: "Regenerative Design in the Many Worlds.md";
  slug: "regenerative-design-in-the-many-worlds";
  body: string;
  collection: "essays";
  data: any
} & { render(): Render[".md"] };
"Response to Levin's Ingressing Minds.md": {
	id: "Response to Levin's Ingressing Minds.md";
  slug: "response-to-levins-ingressing-minds";
  body: string;
  collection: "essays";
  data: any
} & { render(): Render[".md"] };
"Sketches Toward a Theory of the Protocol Underground.md": {
	id: "Sketches Toward a Theory of the Protocol Underground.md";
  slug: "sketches-toward-a-theory-of-the-protocol-underground";
  body: string;
  collection: "essays";
  data: any
} & { render(): Render[".md"] };
"Speculative P2P and the Urban Protocol Underground.md": {
	id: "Speculative P2P and the Urban Protocol Underground.md";
  slug: "speculative-p2p-and-the-urban-protocol-underground";
  body: string;
  collection: "essays";
  data: any
} & { render(): Render[".md"] };
"Undercapital Redux.md": {
	id: "Undercapital Redux.md";
  slug: "undercapital-redux";
  body: string;
  collection: "essays";
  data: any
} & { render(): Render[".md"] };
"Undercapital.md": {
	id: "Undercapital.md";
  slug: "undercapital";
  body: string;
  collection: "essays";
  data: any
} & { render(): Render[".md"] };
"We Are the Neotechnics.md": {
	id: "We Are the Neotechnics.md";
  slug: "we-are-the-neotechnics";
  body: string;
  collection: "essays";
  data: any
} & { render(): Render[".md"] };
"What is Ethereum Localism.md": {
	id: "What is Ethereum Localism.md";
  slug: "what-is-ethereum-localism";
  body: string;
  collection: "essays";
  data: any
} & { render(): Render[".md"] };
"about Exeunt.md": {
	id: "about Exeunt.md";
  slug: "about-exeunt";
  body: string;
  collection: "essays";
  data: any
} & { render(): Render[".md"] };
"attemptatdefinitions.md": {
	id: "attemptatdefinitions.md";
  slug: "attemptatdefinitions";
  body: string;
  collection: "essays";
  data: any
} & { render(): Render[".md"] };
"noopunk.md": {
	id: "noopunk.md";
  slug: "noopunk";
  body: string;
  collection: "essays";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
