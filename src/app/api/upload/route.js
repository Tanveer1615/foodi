import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { writeFile } from "fs/promises";
import uniqid from "uniqid";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  const data = await req.formData();
  if (data.get("file")) {
    // upload the file
    const file = data.get("file");
    const byteData = await file.arrayBuffer();

    const buffer = Buffer.from(byteData);

    const path = `./public/${file.name}`;

    await writeFile(path, buffer);

    const response = await cloudinary.uploader.upload(path, {
      resource_type: "auto",
    });
    fs.unlinkSync(path);

    return Response.json(response.secure_url);
  }
  return Response.json(true);
}
