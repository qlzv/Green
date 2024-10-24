import { Schema, model } from "mongoose";

const SettingsSchema = new Schema({
  Navbar: {
    Logo: {
      type: String,
      required: true,
    },
  },
  Heading: {
    Main: {
      type: String,
      required: true,
    },
    Paragraph: {
      type: String,
      required: true,
    },
    Photo: {
      Url: {
        type: String,
        required: true,
      },
      isCircle: {
        type: Boolean,
        default: true,
      },
    },
  },
  Choose: {
    mainText: {
      type: String,
      required: true,
    },
    Points: {
      type: [String],
      required: true,
    },
  },
  Footer: {
    Logo: {
      type: String,
      required: true,
    },
    Socials: [
      {
        icon: {
          type: String,
          required: true,
        },
        link: {
          type: String,
          required: true,
        },
      },
    ],
  },
  Aboutus: {
    MainText: {
      type: String,
      required: true,
    },
    Paragraph: {
      type: String,
      required: true,
    },

    Photo: {
      Url: {
        type: String,
        required: true,
      },
    },
    Features: {
      First: {
        Main: {
          type: String,
          required: true,
        },
        Paragraph: {
          type: String,
          required: true,
        },
      },
      Second: {
        Main: {
          type: String,
          required: true,
        },
        Paragraph: {
          type: String,
          required: true,
        },
      },
      Third: {
        Main: {
          type: String,
          required: true,
        },
        Paragraph: {
          type: String,
          required: true,
        },
      },
    },
    LastText: {
      type: String,
      required: true,
    },
  },
});

export default model("Settings", SettingsSchema);
