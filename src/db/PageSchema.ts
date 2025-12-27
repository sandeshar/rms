import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema({
    type: { type: String, required: true },            // Hero, Menu, Offer, Tabbed, etc.
    data: { type: mongoose.Schema.Types.Mixed },       // Flexible content (heading, image, etc.)
    position: { type: Number, default: 0 },           // Ordering
});

SectionSchema.add({ sections: [SectionSchema] });

const PageSchema = new mongoose.Schema({
    slug: { type: String, required: true, unique: true },  // /home, /about
    title: { type: String, required: true },
    sections: [SectionSchema],                              // Nested sections
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Page || mongoose.model("Page", PageSchema);
