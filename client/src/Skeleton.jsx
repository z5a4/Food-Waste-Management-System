import { Typography } from "@material-tailwind/react";

function Skeleton() {
  return (
    <div className="max-w-full animate-pulse mt-2 mb-1">
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 lg:w-100 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 lg:w-100 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 lg:w-100 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 lg:w-100 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 lg:w-100 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      
      <div className="flex justify-center items-center mt-5">
        <div className="grid h-64 lg:h-96 w-100 lg:w-100 place-items-center rounded-lg bg-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-12 w-12 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
      </div>
    
    </div>
  );
}

export default Skeleton;
