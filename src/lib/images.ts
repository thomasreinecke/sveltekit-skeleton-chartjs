type ImageLinkArgs = {
	/** Image ID */
	id: ImageKey;
	/** Image Height */
	h: number;
	/** Image Width */
	w: number;
	/** Adds the fit=max query param */
	max?: boolean;
};

export function getImageLink({ id, h, w, max }: ImageLinkArgs): string {
	const path = images[id].raw;
	return `${path}&w=${w}&h=${h}&auto=format&fit=${max ? 'max' : 'crop'}`;
}

type ImageKey = keyof typeof images;

export const images = {
	YOErFW8AfkI: {
		raw: 'https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3'
	},
	z_X0PxmBuIQ: {
		raw: 'https://images.unsplash.com/photo-1510111652602-195fc654aa83?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY0Nzl8&ixlib=rb-4.0.3'
	},
	vjUokUWbFOs: {
		raw: 'https://images.unsplash.com/photo-1620562303747-ba21ca6f1530?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2MjR8&ixlib=rb-4.0.3'
	},
	VYuJLsF4XQQ: {
		raw: 'https://images.unsplash.com/photo-1509130446053-899ae7358ce6?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NjF8&ixlib=rb-4.0.3'
	}
} as const;