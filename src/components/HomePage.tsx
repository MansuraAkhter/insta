import { useEffect, useState } from "react";
import Layout from "./Layout";
import Posts from "./Posts";
import Image from "next/image";
import LOGO from "../asset/LOGO.png";
import homeActive from "../asset/home-active.png";
import Vector from "../asset/Vector.png";
import trends from "../asset/likes.png";
import search from "../asset/search.png";
import Link from "next/link";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import profilepic from "../asset/profilepic.jpeg";
import CreateModal from "./createModal";

const HomePage = () => {
  const [modal, setModal] = useState("");
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(Boolean);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const refetchData = () => {
    const apiUrl = "/api/posts";

   

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Layout>
      <div className="md:flex-row flex bg-white place-content-around  min-w-full items-center p-4 flex-col">
        <div>
          <Image src={LOGO} alt="" />
        </div>
        {/* <div className="relative m-2 md:0">
          <Image src={search} alt="" className="absolute left-2 top-6" />
          <input
            type="text"
            placeholder="search"
            onChange={(e)=>setUserName(e.target.value)}
            className="px-8 py-4 bg-gray-200 border-2 rounded-md border-solid border-gray-200 "
          />
        </div> */}

        <div className="flex h-6 space-x-4">
          <Image src={homeActive} alt="" />
          <Image src={Vector} alt="" />
          <Image src={trends} alt="" />
          <button
            onClick={() => {
              setModal("modal1"), handleOpen();
            }}
          >
            <AddBoxOutlinedIcon />
          </button>
          <div className="rounded-full cursor-pointer">
            <Link href="/profile">
              <Image
                className="rounded-full"
                src={profilepic}
                alt=""
                width={22}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative ">
        <CreateModal
          open={open}
          handleClose={handleClose}
          setModal={setModal}
          modal={modal}
          refetchData={refetchData}
        />
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div></div>
        <div>
          <Posts setData={setData} data={data}  />
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export default HomePage;
