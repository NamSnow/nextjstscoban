import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CreateModal from "./create.modal";
import { useState } from "react";
import EditModal from "@/components/edit.modal";

interface IProps {
  blogs: IBlog[];
}

const AppTable = (props: IPlops) => {
  const { blogs } = props;
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [updateBlog, setUpdateBlog] = useState<object>({});
  const [deleteBlog, setDeleteBlog] = useState<object>({});

  const handleEditBlog = (blog: any) => {
    setShowModalEdit(true);
    setBlog(blog);
  };

  const handleDeleteBlog = (item: any) => {
    setShowModalDelete(true);
    setDeleteBlog(item);
  };

  return (
    <>
      <div className="mb-3 d-flex justify-content-between">
        <h3>Table Blogs</h3>
        <Button variant="secondary" onClick={() => setShowModalCreate(true)}>
          Add New
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Button>View</Button>
                  <Button
                    variant="warning"
                    className="mx-3"
                    onClick={() => handleEditBlog(item)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteBlog(blog)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
      />

      <EditModal
        blog={blog}
        setBlog={setBlog}
        showModalEdit={showModalEdit}
        setShowModalEdit={setShowModalEdit}
      />
    </>
  );
};

export default AppTable;
