import { NextApiRequest, NextApiResponse } from "next";
import { uploadImage } from "../../../lib/firebase";

function fileUploadHandler(req: NextApiRequest, res: NextApiResponse) {
  let buffer: Array<Buffer> = [];

  req.on("data", (data) => {
    console.log(`RECEIVING DATA...`);
    buffer.push(data);
  });

  req.on("end", async () => {
    const stichedArray = Buffer.concat(buffer);
    const stringBuffer = stichedArray.toString("utf-8");
    const jsonBuffer = JSON.parse(stringBuffer);
    const fileUrl = await uploadImage(jsonBuffer.fileName, jsonBuffer.file);
    res.send({ status: "OK", ...fileUrl });
  });
}

export default fileUploadHandler;
export const config = {
  api: {
    bodyParser: false,
  },
};
