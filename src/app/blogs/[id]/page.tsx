"use client";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ViewDetailBlog = ({ params }: { params: Promise<{ id: string }> }) => {
  console.log("Check props", params.id);

  return (
    <div>
      <Link href={"/"}>Go back</Link>

      <Card className="text-center">
        <Card.Header>Title</Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Author</Card.Footer>
      </Card>
    </div>
  );
};

export default ViewDetailBlog;
