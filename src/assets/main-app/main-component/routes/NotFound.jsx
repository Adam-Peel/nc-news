import BadRequest from "./BadRequest";

function NotFound() {
  return (
    <>
      <BadRequest errorStatus={404} />
    </>
  );
}

export default NotFound;
