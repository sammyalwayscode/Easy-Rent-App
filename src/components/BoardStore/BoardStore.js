import React, { useState } from "react";
import "./BoardStore.css";
import { Button, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { app } from "../FireBase/Base";
import { useHistory } from "react-router-dom";

const AllRent = app.firestore().collection("AllRent");
const MyRent = app.firestore().collection("AgentUpload");
const StoreRent = app.firestore().collection("AllStoresOrShop");
function BoardStore() {
  const hist = useHistory();
  const [coverImage1, setCoverImage1] = useState(null);
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  const [img4, setImg4] = useState(null);
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [discription, setDiscription] = useState("");
  const [price, setPrice] = useState("");

  const ImageUrlCover = async (e) => {
    const file1 = e.target.files[0];
    const storage1 = app.storage().ref();
    const Child = storage1.child(file1.name);
    await Child.put(file1);
    setCoverImage1(await Child.getDownloadURL());
  };

  const ImageUrl1 = async (e) => {
    const file1 = e.target.files[0];
    const storage1 = app.storage().ref();
    const Child = storage1.child(file1.name);
    await Child.put(file1);
    setImg1(await Child.getDownloadURL());
  };

  const ImageUrl2 = async (e) => {
    const file1 = e.target.files[0];
    const storage1 = app.storage().ref();
    const Child = storage1.child(file1.name);
    await Child.put(file1);
    setImg2(await Child.getDownloadURL());
  };

  const ImageUrl3 = async (e) => {
    const file1 = e.target.files[0];
    const storage1 = app.storage().ref();
    const Child = storage1.child(file1.name);
    await Child.put(file1);
    setImg3(await Child.getDownloadURL());
  };
  const ImageUrl4 = async (e) => {
    const file1 = e.target.files[0];
    const storage1 = app.storage().ref();
    const Child = storage1.child(file1.name);
    await Child.put(file1);
    setImg4(await Child.getDownloadURL());
  };

  // const ButtonClick = () => {
  //   console.log(
  //     coverImage1,
  //     img1,
  //     img2,
  //     img3,
  //     img4,
  //     location,
  //     discription,
  //     price
  //   );
  // };

  const ButtonClick = async () => {
    const newPost = await app.auth().currentUser;

    if (newPost) {
      await AllRent.doc().set({
        coverImage1,
        img1,
        img2,
        img3,
        img4,
        location,
        contact,
        fullAddress,
        discription,
        price,
        createdBy: newPost.uid,
        createdAt: new Date().toString(),
        timeDate: new Date().toString(),
      });

      await MyRent.doc().set({
        coverImage1,
        img1,
        img2,
        img3,
        img4,
        location,
        contact,
        fullAddress,
        discription,
        price,
        createdBy: newPost.uid,
        createdAt: new Date().toString(),
        timeDate: new Date().toString(),
      });

      await StoreRent.doc().set({
        coverImage1,
        img1,
        img2,
        img3,
        img4,
        location,
        contact,
        fullAddress,
        discription,
        price,
        createdBy: newPost.uid,
        createdAt: new Date().toString(),
        timeDate: new Date().toString(),
      });
      hist.push("/thedashhome");
    }
  };

  return (
    <div className="GeneralLoginDiv">
      <div className="SubGeneralLoginDiv">
        <div className="ContentHold">
          <div>
            <div style={{ color: "#ddd" }}>Choose a cover Image</div>
            <Input
              className="InputDiv"
              type="file"
              autoFocus
              required
              onChange={ImageUrlCover}
            />
            <div style={{ color: "#ddd" }}>Other Images (Image 1)</div>
            <Input
              className="InputDiv"
              autoFocus
              required
              type="file"
              onChange={ImageUrl1}
            />
            <div style={{ color: "#ddd" }}>Other Images (Image 2)</div>
            <Input
              className="InputDiv"
              autoFocus
              required
              type="file"
              onChange={ImageUrl2}
            />
            <div style={{ color: "#ddd" }}>Other Images (Image 3)</div>
            <Input
              className="InputDiv"
              autoFocus
              required
              type="file"
              onChange={ImageUrl3}
            />
            <div style={{ color: "#ddd" }}>Other Images (Image 4)</div>
            <Input
              className="InputDiv"
              autoFocus
              required
              type="file"
              onChange={ImageUrl4}
            />
          </div>
          <div>
            <div style={{ color: "#ddd" }}>Location of the Store/Shop</div>
            <Input
              className="InputDiv"
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <div style={{ color: "#ddd" }}>Full Address of the Store/Shop</div>
            <Input
              className="InputDiv1"
              type="text"
              placeholder="Full House Address"
              value={fullAddress}
              onChange={(e) => {
                setFullAddress(e.target.value);
              }}
            />
            <div style={{ color: "#ddd" }}>Price Of The Store</div>
            <Input
              className="InputDiv1"
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <div style={{ color: "#ddd" }}>Contact Number</div>
            <Input
              className="InputDiv1"
              type="text"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />
            <div style={{ color: "#ddd" }}>
              Discribe How The Store Looks Like
            </div>
            <TextArea
              placeholder="Discription"
              className="InputDiv1"
              value={discription}
              onChange={(e) => {
                setDiscription(e.target.value);
              }}
            />
            <div style={{ color: "#ddd" }}>
              {" "}
              Paste The Embedded Map Codes Hear{" "}
            </div>
            <TextArea placeholder="Map" className="InputDiv" />
          </div>
        </div>
        <Button
          onClick={ButtonClick}
          style={{
            marginTop: "15px",
            backgroundColor: "#0373ab",
            width: "120px",
            marginBottom: "15px",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Upload
        </Button>
      </div>
    </div>
  );
}

export default BoardStore;
