import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full flex justify-center">
      <Image src="/loading.gif" height={200} width={200} alt={""} />
    </div>
  );
};

export default Loading;
