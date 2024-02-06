import React, { FormEvent, SetStateAction, useState } from "react";
import { toast } from "react-hot-toast";
interface DeleteTaskProps {
  closeDeleteTaskModal: React.Dispatch<SetStateAction<boolean>>;
  deleteId: string;
}

const DeleteTask = ({ closeDeleteTaskModal, deleteId }: DeleteTaskProps) => {
  const [toastState, setToastState] = useState<boolean>(false);
  const baseUrl = "https://task-list-backend-service.onrender.com";

  const handleDeleteSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let delSubmit = await fetch(`${baseUrl}/deleteTodo/${deleteId}`, {
      method: "DELETE",
    });

    if (delSubmit.status === 204) {
      setToastState(true);
      toast.success("Successfully deleted");

      setTimeout(() => {
        closeDeleteTaskModal(false);
        setToastState(false);
      }, 2000);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-0">
      <div className=" w-[100vw] h-[100vh] absolute top-0 left-0 flex justify-center items-center  bg-[#443d3d] opacity-[.6]"></div>
      <div className="absolute md:left-[33vw] left-[24vw] md:top-[35vh] top-[22vh] bg-white md:w-[35vw] w-[50vw] flex flex-col gap-[3em] items-center py-[60px] md:px-[90px] px-[2em] font-[Poppins] rounded-3xl">
        <p className="  w-full font-bold text-center md:text-[20px] text-[3vw]">
          Are you sure you want to delete this task ?
        </p>
        <form onSubmit={handleDeleteSubmit} className="flex md:gap-5 gap-[5vw] justify-around  w-full">
          <button className="text-white p-2 md:w-[90px] w-[6em] md:text-[1.2em] text-[2.7vw] rounded-xl bg-[#713fff] shadow-lg">
            Delete
          </button>
          <div
            onClick={() => closeDeleteTaskModal(false)}
            className="text-[#91929e] p-2 md:w-[90px] w-[6em] md:text-[1.2em] text-[2.7vw] rounded-xl border-2 text-center hover:cursor-pointer"
          >
            Cancel
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteTask;
