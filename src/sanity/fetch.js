import { useSanityClient, groq } from "astro-sanity";

export async function getPages() {
    const query = groq`
    *[_type == "page" || _type == "frontpage"] {
        ${content}
    }`;

    const res = await useSanityClient().fetch(query);
    return res;
}

export async function getPreviewPageBySlug(slug) {
    // Time provided to avoid CDN-cached responses
    const time = new Date().getTime();
    const query = groq`
    *[_type == 'page' && slug.current == $slug || _type == "frontpage" && $slug == 'undefined']
    | score(_id in path("drafts.**"))
    | order(_score desc)[0] {
        "timeStamp": $time,
        ${content}
    }`;

    const params = {
        slug: String(slug),
        time,
    };
    const res = await useSanityClient().fetch(query, params);
    return res;
}

const content = groq`
    title,
    defined(slug) => {
        "slug": slug.current,
    },
`;
