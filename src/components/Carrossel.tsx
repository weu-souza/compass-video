import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { apiImageUrl } from "../shared/API/Config/Config";
import semImg from "../assets/img/sem-img.jpg";
import ICarrossel from "../shared/API/Model/carrossel"

type carrosselType = {
  data: ICarrossel[] | null | undefined;
  redirectCollection: React.MouseEvent<HTMLElement>;
};



const Carrossel = ({ data, redirectCollection }: carrosselType) => {
  return (
    <div>
      <Splide
        tag="section"
        options={{
          type: "slide",
          direction: "ltr",
          
          rewind: true,
          rewindByDrag: true,
          arrows: false,
          pagination: false,
          gap: "20px",
          start: 1,
          autoWidth:true
        }}
      >
        {data?.map((imagem) => (
          <SplideSlide key={imagem.id}>
            <img
              src={
                imagem.poster_path ? apiImageUrl(imagem?.poster_path) : semImg
              }
              onClick={() => redirectCollection(imagem.id, imagem?.media_type)}
              className="w-[260px] h-[361px] rounded-lg object-cover cursor-pointer"
              alt="sem imagem"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carrossel;
