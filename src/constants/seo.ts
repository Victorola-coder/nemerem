const image = "https://linktoopengraphimaage.cdn";
const creator = "Victorola";
const author = creator;

export const url = (slug?: string) => {
  return `https://linktowebsite.com/${slug ?? ""}`;
};
export const SEOdata = {
  homePage: {
    author,
    image,
    creator,
    url: url(),
    title: "UI NINJA | Nnaji Chinemerem Christian",
    description:
      "Sometimes I build stuffs, sometimes I break stuffs, sometimes i design, sometimes i make beautiful sounds to please your ears, - all to solve problems",
  },
  aboutUsPage: {
    image,
    author,
    creator,
    url: url("*"),
    title: "UI NINJA | Nnaji Chinemerem Christian",
    description:
      "This is the best error page you will ever see. It's a 404 page, but it's not just any 404 page. It's a 404 page that's so good, it's like a 200 page.",
  },
  // add more pages
};
