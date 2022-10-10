import { CleanHands } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiseLoader } from "react-spinners";
import { instance } from "../../redux/Config_user";
import { deleteUser, getuserData } from "../../redux/UserSlice";

const Dashboard = () => {
  const [showInput, setShowInput] = useState(false);
  const userList = useSelector((state) => state.reducer);
  const crudInPost = useSelector((state) => state.reducer?.postCrud);
  // let deleteData = useSelector((data) => {
  //   return data?.reducer?.status;
  // });
  // setUser(userList.userData.data);

  let dispatch = useDispatch();

  // useEffect(() => {
  //   if (userList.status == "success") {
  //     dispatch(getuserData());
  //   }
  // });

  useEffect(() => {
    dispatch(getuserData(null));
  }, [crudInPost]);

  // const editableData = () => {
  //   console.log("jhjjhj");
  // };
  // const editableData = () => {
  //   console.log("ediytblwl");
  //   setShowInput(true);
  // };

  return (
    <>
      <h1>Dashboard</h1>{" "}
      <Link to="/createpost">
        {" "}
        <button className="btn btn-success m-2">CREATE POST</button>
      </Link>
      {/* {userList.userData.data.map((ele) => {
        return (
          <>
            <h1>{ele.name}</h1>
          </>
        );
      })} */}
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        {userList.loading ? (
          <RiseLoader
            color="#8b1310"
            cssOverride={{}}
            margin={5}
            loading={userList.loading}
            size={20}
            speedMultiplier={1}
          />
        ) : null}
        <tbody>
          {userList?.userData?.data?.map((ele, i) => {
            return (
              <>
                <tr>
                  <th scope="row">{i + 1}</th>
                  {/* <td></td> */}
                  <td>{ele.name}</td>
                  <td>{ele.age}</td>
                  <td>
                    {" "}
                    <button className="btn btn-outline-success m-2">
                      EDIT
                    </button>
                    <button
                      className="btn btn-outline-danger m-2"
                      onClick={() => dispatch(deleteUser(ele._id))}
                    >
                      DELETE
                    </button>
                    <button className="btn btn-outline-warning m-2">
                      VIEW
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;
