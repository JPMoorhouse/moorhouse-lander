import { fields } from "@keystatic/core";
export const HomeHero = {
  label: "Home Hero",
  schema: fields.object({
    title: fields.text({ label: "Title" }),
    subtitle: fields.text({ label: "Subtitle" }),
    bgImage: fields.image({
      label: "Hero background image",
      directory: "/public/images/",
      publicPath: "/images/",
    }),
    bannerTitle: fields.text({ label: "Banner Title" }),
    reviewDescription: fields.text({ label: "Review Description" }),
    firstButton: fields.object({
      label: fields.text({ label: "firstButton" }),
      url: fields.text({ label: "firstButton Slug" }),
    }),
    secondButton: fields.object({
      label: fields.text({ label: "secondButton" }),
      url: fields.text({ label: "secondButton Slug" }),
    }),
  }),
};
export const aboutmoorhouse = {
  label: "About moorhouse",
  schema: fields.object({
    pretitle: fields.text({ label: "Pretitle" }),
    heading: fields.text({ label: "Heading" }),
    title: fields.text({ label: "Title" }),
    subtitle: fields.text({ label: "Subtitle" }),
    description: fields.text({ label: "Description", multiline: true }),
    image: fields.image({
      label: "What we do image",
      directory: "/public/images/",
      publicPath: "/images/",
    }),
    Button: fields.object({
      label: fields.text({ label: "Button" }),
      url: fields.text({ label: "Button Slug" }),
    }),
  }),
};
export const WhatWeOffer = {
  label: "What we offer",
  schema: fields.object({
    pretitle: fields.text({ label: "Pretitle" }),
    heading: fields.text({ label: "Heading" }),
    bgImage: fields.image({
      label: "background image",
      directory: "/public/images/",
      publicPath: "/images/",
    }),
    whatweoffer: fields.array(
      fields.object({
        Cardicon: fields.image({
          label: "Card Icon",
          directory: "/public/images/",
          publicPath: "/images",
        }),
        cardText: fields.text({ label: "Card Text" }),
        cardDescription: fields.text({ label: "Card Description" }),
      }),
      {
        label: "What we offer ",
        itemLabel: (props) => props.fields.cardText.value,
      }
    ),
    bannerTitle: fields.text({ label: "Banner Title" }),
  }),
};
export const WhatToExpect = {
  label: "What to expect",
  schema: fields.object({
    pretitle: fields.text({ label: "Pretitle" }),
    heading: fields.text({ label: "Heading" }),
    WhatToExpect: fields.array(
      fields.object({
        Cardicon: fields.image({
          label: "Card Icon",
          directory: "/public/images/",
          publicPath: "/images",
        }),
        cardText: fields.text({ label: "Card Text" }),
        cardDescription: fields.text({ label: "Card Description" }),
      }),
      {
        label: "What To Expect",
        itemLabel: (props) => props.fields.cardText.value,
      }
    ),
  }),
};
export const moorHouseCaoating = {
  label: "Moorhouse Coating",
  schema: fields.object({
    pretitle: fields.text({ label: "Pretitle" }),
    heading: fields.text({ label: "Heading" }),
    title: fields.text({ label: "Title" }),

    description: fields.text({ label: "Description", multiline: true }),
    image: fields.image({
      label: "What we do image",
      directory: "/public/images/",
      publicPath: "/images/",
    }),
    bannerTitle: fields.text({ label: "Banner Title" }),
    
  }),
};
export const Testimonials = {
  label: "Testimonials",
  schema: fields.object({
    pretitle: fields.text({ label: "Pretitle" }),
    heading: fields.text({ label: "Heading" }),
    Testimonials: fields.array(
      fields.object({
        rating: fields.number({
          label: "rating",
          hideStepper: false,
          validation: {
            min: 0,
            max: 5,
            validateStep: true,
          },
        }),
        cardText: fields.text({ label: "Card Text" }),
        author: fields.image({
          label: "Author picture",
          directory: "/public/images/",
          publicPath: "/images",
        }),
        authorName: fields.text({ label: "Author Name" }),
        authorpost: fields.text({ label: "Author designation" }),
      }),

      {
        label: "Testimonials",
        itemLabel: (props) => props.fields.cardText.value,
      }
    ),
  }),
};
