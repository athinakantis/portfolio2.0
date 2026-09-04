type SliderProps = {
  img_src_a: string;
  img_src_b: string;
};

export default function Slider({ img_src_a, img_src_b }: SliderProps) {
  return (
    <div className="relative">
      <div className="absolute h-full"></div>
      <img
        src={img_src_a}
        alt=""
      />
      <img
        src={img_src_a}
        alt=""
      />
    </div>
  );
}
