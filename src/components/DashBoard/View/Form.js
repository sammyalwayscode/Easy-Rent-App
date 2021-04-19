import React, { useState } from "react";
import style from "styled-components";
// import image1 from "./Images/office.jpg";
import "./Form.css";
import { app } from "../../FireBase/Base";

// The first div tag for FlexWrap

const Wrapper = style.div`
height: 150vh;
width : 100vw;
display: flex;
flex-wrap : wrap;
`;

// Div tag for Total height

const Contain = style.div`
height : 100%;
width : 100%;
display : flex;
justify-content : center;
align-items : center;
margin-top : 5%
`;
// FormCard for the Form

const FormCard = style.aside`
height : 1200px;
width : 500px;
display : flex;
flex-direction : column;
background-color: white;
border: 5px solid lightblue;
border-radius : 10px;
@media screen and (max-width: 500px){
  width : 50%;
}
`;
// Avater Image

const Avatar = style.img`
 height : 20%;
 width : 100%;
 border-radius : 5px
`;
// Heading Tag

const H1 = style.p`
display : flex;
justify-content : center;
font-size : 30px;
color : lightblue ;
font-family : cursor;
`;
// Tag for the Input Div's

const DivTag = style.div`
 height : 70%;
 display : flex;
 flex-direction : column;
 justify-content : space-evenly;
`;
// image Divs Tag

const ImageTag = style.div`
 display : flex;
 flex-direction : row;
 align-items : center;
 justify-content : space-around;
 margin-left : 10px;
`;
// Tag for Input Image

const ImageInput = style.input`
height : 60%;
width : 60%;
outline : lightblue;
border : 1px solid lightblue;
padding : 5px;
`;
// Tag for Location

const LocationDiv = style.div`
display : flex;
justify-content : center;
flex-direction : column;
margin-left : 5%
`;
const LocationInput = style.input`
height : 50px;
width : 90%;
outline : lightblue;
border : 1px solid lightblue;
margin : 2px;
padding : 5px;
font-size : 20px;
`;
const BigButton = style.button`
 height : 50px;
 width : 90%;
 background-color : lightblue;
 color : white;
 font-family : cursive;
 outline : none;
 border : none;
 margin-left : 5%
`;

const FlatRent = app.firestore().collection("RentFlat");
function Form() {
  const [coverImage1, setCoverImage1] = useState(null);
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  const [img4, setImg4] = useState(null);
  const [location, setLocation] = useState("");
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
      await FlatRent.doc().set({
        coverImage1,
        img1,
        img2,
        img3,
        img4,
        location,
        discription,
        price,
        createdBy: newPost.uid,
        createdAt: new Date().toString(),
        timeDate: new Date().toString(),
      });
    }
  };

  return (
    <Wrapper className="ForTheImage">
      <Contain className="ForTheColor">
        <FormCard>
          {/* <Avatar alt="" src={image1} /> */}

          <H1> Fill House </H1>

          <DivTag>
            <ImageTag>
              <p
                style={{
                  fontFamily: "cursive",
                  color: "lightblue",
                }}
              >
                {" "}
                CoverImage{" "}
              </p>

              <ImageInput
                placeholder="CoverImage"
                type="file"
                onChange={ImageUrlCover}
              />
            </ImageTag>

            <ImageTag>
              <p
                style={{
                  fontFamily: "cursive",
                  color: "lightblue",
                }}
              >
                {" "}
                Image1{" "}
              </p>

              <ImageInput
                placeholder="image1"
                type="file"
                onChange={ImageUrl1}
              />
            </ImageTag>

            <ImageTag>
              <p
                style={{
                  fontFamily: "cursive",
                  color: "lightblue",
                }}
              >
                {" "}
                Image2{" "}
              </p>

              <ImageInput
                placeholder="image2"
                type="file"
                onChange={ImageUrl2}
              />
            </ImageTag>

            <ImageTag>
              <p
                style={{
                  fontFamily: "cursive",
                  color: "lightblue",
                }}
              >
                {" "}
                Image3{" "}
              </p>

              <ImageInput
                placeholder="image3"
                type="file"
                onChange={ImageUrl3}
              />
            </ImageTag>

            <ImageTag>
              <p
                style={{
                  fontFamily: "cursive",
                  color: "lightblue",
                }}
              >
                {" "}
                Image4{" "}
              </p>

              <ImageInput
                placeholder="image4"
                type="file"
                onChange={ImageUrl4}
              />
            </ImageTag>

            <LocationDiv>
              <p
                style={{
                  fontFamily: "cursive",
                  color: "lightblue",
                }}
              >
                {" "}
                Location 💯{" "}
              </p>

              <LocationInput
                placeholder="Location"
                type="text"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </LocationDiv>

            <LocationDiv>
              <p
                style={{
                  fontFamily: "cursive",
                  color: "lightblue",
                }}
              >
                {" "}
                Discription 💯{" "}
              </p>

              <LocationInput
                placeholder="Discription"
                type="text"
                value={discription}
                onChange={(e) => {
                  setDiscription(e.target.value);
                }}
              />
            </LocationDiv>

            <LocationDiv>
              <p
                style={{
                  fontFamily: "cursive",
                  color: "lightblue",
                }}
              >
                {" "}
                Price 💯{" "}
              </p>

              <LocationInput
                placeholder="Price"
                type="text"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </LocationDiv>

            <BigButton onClick={ButtonClick}> Submit </BigButton>
          </DivTag>
        </FormCard>
      </Contain>
    </Wrapper>
  );
}

export default Form;
