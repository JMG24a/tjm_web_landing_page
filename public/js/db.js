const WELCOME = {
  sofas: {
    image4_5: "/image/4_5_sofas_products.png",
    image16_9: "/image/slider_sofas_d.png",
    image21_9: "/image/slider_sofas_d.png",
    slogan_1: "Crea tu espacio",
    slogan_2: "Con los mejores muebles"
  },
  comedores:{
    image4_5: "/image/4_5_comedores_slider.jpg",
    image16_9: "/image/16_9_comedores_slider.jpg",
    image21_9: "/image/21_9_comedores_slider.jpg",
    slogan_1: "Crea tu espacio",
    slogan_2: "Disfruta en familia."
  },
  multimuebles:{
    image4_5: "/image/4_5_multimueble_slider.jpg",
    image16_9: "/image/16_9_multimueble_slider.jpg",
    image21_9: "/image/21_9_multimueble_slider.jpg",
    slogan_1: "Crea tu espacio",
    slogan_2: "Disfruta y comparte en familia."
  },
  dormitorios:{
    // image4_5: "/image/4_5_dormitorio_slider.jpg",
    image4_5: "/image/category_dormitorio.jpg",
    image16_9: "/image/16_9_dormitorio_slider.jpg",
    image21_9: "/image/21_9_dormitorio_slider.jpg",
    slogan_1: "Crea tu espacio",
    slogan_2: "descansa en tu hogar soñado."
  },
  colchones:{
    // image4_5: "/image/4_5_dormitorio_slider.jpg",
    image4_5: "/image/category_dormitorio.jpg",
    image16_9: "/image/16_9_dormitorio_slider.jpg",
    image21_9: "/image/21_9_dormitorio_slider.jpg",
    slogan_1: "Crea tu espacio",
    slogan_2: "descansa en tu hogar soñado."
  },
  accesorios:{
    image4_5: "/image/4_5_dormitorio_slider.jpg",
    image16_9: "/image/16_9_dormitorio_slider.jpg",
    image21_9: "/image/21_9_dormitorio_slider.jpg",
    slogan_1: "Crea tu espacio",
    slogan_2: "descansa en tu hogar soñado."
  }
}

const PRODUCTS = {
  dormitorios: [
    {
      id: 7000,
      name: "Cama Hielo",
      desc: "Descubra el equilibrio perfecto entre diseño y resistencia. La cama Hielo ha sido fabricada cuidadosamente en madera de pino de primera calidad, destacando por una estética refinada y acabados artesanales de alta gama. Su estructura de ingeniería reforzada integra 10 vigas transversales y una base sólida de MDF, garantizando una estabilidad inigualable y una vida útil prolongada. La cabecera, protagonista de esta pieza, presenta un diseño detallado que aporta un toque de distinción y confort a su dormitorio.",
      img: "dormitorio_cama_hielo_gris.png",
      colors: [
        {
          img: "dormitorio_cama_hielo_gris.png",
          color: "#333",
        },
        {
          img: "dormitorio_cama_hielo_black.png",
          color: "black",
        },
        {
          img: "dormitorio_cama_hielo_beige.png",
          color: "beige"
        }
      ]
    },
    {
      id: 7001,
      name: "Cama Nube",
      desc: "Descubra el equilibrio perfecto entre diseño y resistencia. La cama Nube ha sido fabricada cuidadosamente en madera de pino de primera calidad, destacando por una estética refinada y acabados artesanales de alta gama. Su estructura de ingeniería reforzada integra 10 vigas transversales y una base sólida de MDF, garantizando una estabilidad inigualable y una vida útil prolongada. La cabecera, protagonista de esta pieza, presenta un diseño detallado que aporta un toque de distinción y confort a su dormitorio.",
      img: "dormitorio_cama_nube_beige.png",
      colors: [
        {
          img: "dormitorio_cama_nube_beige.png",
          color: "beige",
        },
        {
          img: "dormitorio_cama_nube_black.png",
          color: "black",
        },
        {
          img: "dormitorio_cama_nube_gray.png",
          color: "gray"
        }
      ]
    },
    // {
    //   id: 7002,
    //   name: "Cama Hielo Medio",
    //   desc: "descripcion cama coco",
    //   img: "no_picture.png",
    //   colors: [
    //     {
    //       img: "16_9_cairo_gris_claro.jpg",
    //       color: "#333",
    //     },
    //     {
    //       img: "16_9_cairo_gris_claro.jpg",
    //       color: "#633e3e",
    //     },
    //   ]
    // },
  {
      id: 7003,
      name: "Cama Coco",
      desc: "Descubra el equilibrio perfecto entre diseño y resistencia. La cama Coco ha sido fabricada cuidadosamente en madera de pino de primera calidad, destacando por una estética refinada y acabados artesanales de alta gama. Su estructura de ingeniería reforzada integra 10 vigas transversales y una base sólida de MDF, garantizando una estabilidad inigualable y una vida útil prolongada. La cabecera, protagonista de esta pieza, presenta un diseño detallado que aporta un toque de distinción y confort a su dormitorio.",
      img: "dormitorio_cama_coco_pink.png",
      colors: [
        {
          img: "dormitorio_cama_coco_pink.png",
          color: "pink",
        },
        {
          img: "dormitorio_cama_coco_beige.png",
          color: "beige",
        },
      ]
    },
    {
      id: 7004,
      name: "Cama Princesa",
      desc: "Descubra el equilibrio perfecto entre diseño y resistencia. La cama Princesa ha sido fabricada cuidadosamente en madera de pino de primera calidad, destacando por una estética refinada y acabados artesanales de alta gama. Su estructura de ingeniería reforzada integra 10 vigas transversales y una base sólida de MDF, garantizando una estabilidad inigualable y una vida útil prolongada. La cabecera, protagonista de esta pieza, presenta un diseño detallado que aporta un toque de distinción y confort a su dormitorio.",
      img: "no_picture.png",
      colors: [
        {
          img: "16_9_cairo_gris_claro.jpg",
          color: "#333",
        },
        {
          img: "16_9_cairo_gris_claro.jpg",
          color: "#633e3e",
        },
      ]
    },
    {
      id: 7005,
      name: "Cama Barco",
      desc: "Descubra el equilibrio perfecto entre diseño y resistencia. La cama Barco ha sido fabricada cuidadosamente en madera de pino de primera calidad, destacando por una estética refinada y acabados artesanales de alta gama. Su estructura de ingeniería reforzada integra 10 vigas transversales y una base sólida de MDF, garantizando una estabilidad inigualable y una vida útil prolongada. La cabecera, protagonista de esta pieza, presenta un diseño detallado que aporta un toque de distinción y confort a su dormitorio.",
      img: "dormitorio_cama_barco_beige.png",
      colors: [
        {
          img: "dormitorio_cama_barco_beige.png",
          color: "beige"
        },
        {
          img: "dormitorio_cama_barco_black.png",
          color: "black",
        },
        {
          img: "dormitorio_cama_barco_blue.png",
          color: "blue",
        }
      ]
    },
   {
      id: 7006,
      name: "Cama Sol",
      desc: "Descubra el equilibrio perfecto entre diseño y resistencia. La cama Sol ha sido fabricada cuidadosamente en madera de pino de primera calidad, destacando por una estética refinada y acabados artesanales de alta gama. Su estructura de ingeniería reforzada integra 10 vigas transversales y una base sólida de MDF, garantizando una estabilidad inigualable y una vida útil prolongada. La cabecera, protagonista de esta pieza, presenta un diseño detallado que aporta un toque de distinción y confort a su dormitorio.",
      img: "dormitorio_cama_sol_gray.png",
      colors: [
        {
          img: "dormitorio_cama_sol_gray.png",
          color: "#919191",
        },
        {
          img: "dormitorio_cama_sol_brown.png",
          color: "#4c2c2c",
        },
        {
          img: "dormitorio_cama_sol_beige.png",
          color: "beige",
        },
      ]
    },
    {
      id: 7007,
      name: "Cama Nene",
      desc: "Descubra el equilibrio perfecto entre diseño y resistencia. La cama Nene ha sido fabricada cuidadosamente en madera de pino de primera calidad, destacando por una estética refinada y acabados artesanales de alta gama. Su estructura de ingeniería reforzada integra 10 vigas transversales y una base sólida de MDF, garantizando una estabilidad inigualable y una vida útil prolongada. La cabecera, protagonista de esta pieza, presenta un diseño detallado que aporta un toque de distinción y confort a su dormitorio.",
      img: "dormitorio_cama_nene_blue.png",
      colors: [
        {
          img: "dormitorio_cama_nene_blue.png",
          color: "#05ac88",
        },
        {
          img: "dormitorio_cama_nene_beige.png",
          color: "beige",
        },
      ]
    },
    {
      id: 7008,
      name: "Cama Moises",
      desc: "Descubra el equilibrio perfecto entre diseño y resistencia. La cama Moises ha sido fabricada cuidadosamente en madera de pino de primera calidad, destacando por una estética refinada y acabados artesanales de alta gama. Su estructura de ingeniería reforzada integra 10 vigas transversales y una base sólida de MDF, garantizando una estabilidad inigualable y una vida útil prolongada. La cabecera, protagonista de esta pieza, presenta un diseño detallado que aporta un toque de distinción y confort a su dormitorio.",
      img: "dormitorio_cama_moises_white.png",
      colors: [
        {
          img: "dormitorio_cama_moises_white.png",
          color: "#333",
        },
        {
          img: "dormitorio_cama_moises_blue.png",
          color: "#0040a0",
        },
        {
          img: "dormitorio_cama_moises_beige.png",
          color: "beige",
        },
      ]
    },
   {
      id: 7009,
      name: "Cama Triangular",
      desc: "Descubra el equilibrio perfecto entre diseño y resistencia. La cama Triangular ha sido fabricada cuidadosamente en madera de pino de primera calidad, destacando por una estética refinada y acabados artesanales de alta gama. Su estructura de ingeniería reforzada integra 10 vigas transversales y una base sólida de MDF, garantizando una estabilidad inigualable y una vida útil prolongada. La cabecera, protagonista de esta pieza, presenta un diseño detallado que aporta un toque de distinción y confort a su dormitorio.",
      img: "dormitorio_cama_triangular_red.png",
      colors: [
        {
          img: "dormitorio_cama_triangular_red.png",
          color: "red",
        },
        {
          img: "dormitorio_cama_triangular_beige.png",
          color: "beige",
        },
        {
          img: "dormitorio_cama_triangular_gray.png",
          color: "gray",
        },
      ]
    },
  ],
  sofas: [
    {
      id: 1000,
      name: "Zultan 2 Barrigas",
      size: "240cm - 240cm",
      desc: "El sofá Zultan destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_zultan_2_barrigas_beige.png",
      suggest: [1001, 1002],
      colors: [
        {
          img: "sofa_zultan_2_barrigas_beige.png",
          color: "beige",
        },
        {
          img: "sofa_zultan_2_barrigas_gris.png",
          color: "gray",
        },
        {
          img: "sofa_zultan_2_barrigas_black.png",
          color: "black",
        }
      ]
    },
    {
      id: 1001,
      name: "Zultan Chapa",
      size: "240cm - 240cm",
      desc: "El sofá Zultan destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_zultan_chapa_gray.png ",
      suggest: [1000, 1002],
      colors: [
        {
          img: "sofa_zultan_chapa_gray.png ",
          color: "gray",
        },
        {
          img: "sofa_zultan_chapa_black.png",
          color: "black",
        },
        {
          img: "sofa_zultan_chapa_white.png ",
          color: "white",
        }
      ]
    },
    {
      id: 1002,
      name: "Zultan Cuadrado",
      size: "240cm - 240cm",
      desc: "El sofá Zultan destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_zultan_cuadrado_black.jpeg",
      suggest: [1000, 1001],
      colors: [
        {
          img: "sofa_zultan_cuadrado_black.jpeg",
          color: "black",
        },
        {
          img: "sofa_zultan_cuadrado_gray.jpeg",
          color: "gray",
        },
        {
          img: "sofa_zultan_cuadrado_gray_black.jpeg",
          color: "#595959",
        }
      ]
    },
    {
      id: 1003,
      name: "Mueble L",
      size: "160cm - 240cm",
      desc: "El sofá Mueble L destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_muebleL_red.png",
      suggest: [1004, 1007],
      colors: [
        {
          img: "sofa_muebleL_red.png",
          color: "red",
        },
        {
          img: "sofa_muebleL_black.png ",
          color: "black",
        },
        {
          img: "sofa_muebleL_white.png",
          color: "white",
        }
      ]
    },
    {
      id: 1004,
      name: "Sofa Osman",
      size: "160cm - 240cm",
      desc: "El sofá Osman destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_osman_white_d.jpg",
      suggest: [1003, 1007],
      colors: [
        {
          img: "sofa_osman_white_d.jpg",
          color: "#ffffff",
        },
        {
          img: "sofa_osman_black_d.jpg",
          color: "#000000",
        },
        {
          img: "sofa_osman_brown_d.jpg",
          color: "#6a3d2c"
        },
        {
          img: "sofa_osman_gray_d.jpg",
          color: "gray"
        },
        {
          img: "sofa_osman_beige_d.jpg",
          color: "beige"
        }
      ]
    },
    {
      id: 1005,
      name: "Sofa Hielo",
      size: "160cm - 240cm",
      desc: "El sofá Hielo destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_hielo_gray.jpg",
      suggest: [1017, 1023],
      colors: [
        {
          img: "sofa_hielo_gray.jpg",
          color: "gray",
        },
        {
          img: "sofa_hielo_beige.jpg",
          color: "beige",
        },
        {
          img: "sofa_hielo_black.jpg",
          color: "black",
        },
      ]
    },
    {
      id: 1006,
      name: "Sofa Nube",
      size: "160cm - 240cm",
      desc: "El sofá Nube destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_juego_nube_gray.PNG",
      suggest: [1012, 1019],
      colors: [
        {
          img: "sofa_juego_nube_gray.PNG",
          color: "#3e3e3e",
        },
        {
          img: "sofa_juego_nube_white.PNG",
          color: "#ffffff",
        },
        {
          img: "sofa_juego_nube_beige.PNG",
          color: "#d2b48c",
        },
        {
          img: "sofa_nube_beige_.PNG",
          color: "#d2b48c",
        },
        {
          img: "sofa_nube_poltrona_beige.jpng",
          color: "#d2b48c",
        },
      ]
    },
    {
      id: 1007,
      name: "Sofa Labros",
      desc: "El sofá Labros destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_labros_beige.jpg",
      suggest: [1004, 1003],
      colors: [
        {
          img: "sofa_labros_beige.jpg",
          color: "beige",
        },
        {
          img: "sofa_labros_black.jpg",
          color: "black",
        },
        {
          img: "sofa_labros_gray.jpg",
          color: "gray"
        }
      ]
    },
    {
      id: 1008,
      name: "Sofa Cairo",
      size: "160cm - 240cm",
      desc: "El sofá Cairo destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_cairo_beige_d.jpg",
      suggest: [1011, 1009],
      colors: [
        {
          img: "sofa_cairo_beige_d.jpg",
          color: "beige",
        },
        {
          img: "sofa_cairo_black_d.jpg",
          color: "#000000",
        },
        {
          img: "sofa_cairo_white_d.jpg",
          color: "#838383"
        }
      ]
    },
    {
      id: 1009,
      name: "Sofa Richard",
      desc: "El sofá Richard destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_richard_gray_white.jpeg",
      suggest: [1020, 1011],
      colors: [
        {
          img: "sofa_richard_gray_white.jpeg",
          color: "#393939",
        },
        {
          img: "sofa_richard_black.jpeg",
          color: "black"
        },
        {
          img: "sofa_richard_white.jpeg",
          color: "rgba(255, 255, 255, 0.96)",
        },
        {
          img: "sofa_richard_red.jpeg",
          color: "red",
        },
      ]
    },
    {
      id: 1010,
      name: "Sofa Toty",
      size: "160cm - 240cm",
      desc: "El sofá Toty destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_toty_black_d.jpg",
      suggest: [1013, 1011],
      colors: [
        {
          img: "sofa_toty_black_d.jpg",
          color: "#000000",
        },
        {
          img: "sofa_toty_gray_d.jpg",
          color: "#949494",
        }
      ]
    },
    {
      id: 1011,
      name: "Sofa Palermo",
      size: "160cm - 240cm",
      desc: "El sofá Palermo destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_palermo_gray_black.PNG",
      suggest: [1013, 1010],
      colors: [
        {
          img: "sofa_palermo_gray_black.PNG",
          color: "gray",
        },
        {
          img: "sofa_palermo_beige.PNG",
          color: "beige",
        },
        {
          img: "sofa_palermo_gray.PNG",
          color: "gray"
        }
      ]
    },
    {
      id: 1012,
      name: "Sofa Berlin",
      size: "160cm - 240cm",
      desc: "El sofá Berlin destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_berlin_black.jpeg",
      suggest: [1019, 1019],
      colors: [
        {
          img: "sofa_berlin_black.jpeg",
          color: "black",
        },
        {
          img: "sofa_berlin_beige.jpeg",
          color: "beige",
        },
        {
          img: "sofa_berlin_white.jpeg",
          color: "white"
        },
        {
          img: "sofa_berlin_gray.jpeg",
          color: "#949494"
        }
      ]
    },
    {
      id: 1013,
      name: "Sofa Enmaly",
      desc: "El sofá Enmaly destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_enmaly_white.jpg",
      suggest: [1011, 1010],
      colors: [
        {
          img: "sofa_enmaly_white.jpg",
          color: "white",
        },
        {
          img: "sofa_enmaly_beige.jpg",
          color: "beige",
        },
        {
          img: "sofa_enmaly_gray.jpg",
          color: "gray"
        }
      ]
    },
    {
      id: 1014,
      name: "Sofa Damasco",
      desc: "El sofá Damasco destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_damasco_black.jpeg",
      suggest: [1015],
      colors: [
        {
          img: "sofa_damasco_black.jpeg",
          color: "black",
        },
        {
          img: "sofa_damasco_white.jpeg",
          color: "white"
        },
      ]
    },
    {
      id: 1015,
      name: "Sofa Roma",
      desc: "El sofá Roma destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_roma_black.jpg",
      suggest: [1014],
      colors: [
        {
          img: "sofa_roma_black.jpg",
          color: "black",
        },
        {
          img: "sofa_roma_red.jpg",
          color: "rgba(145, 11, 11, 0.96)",
        },
        {
          img: "sofa_roma_gray.jpg",
          color: "gray"
        },
        {
          img: "sofa_roma_white.jpg",
          color: "white",
        },
      ]
    },
    {
      id: 1016,
      name: "Sofa Zultan 3 puestos",
      desc: "El sofá Zultan 3 puestos destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_zultan_3puestos_gray.jpeg",
      suggest: [1001, 1002],
      colors: [
        {
          img: "sofa_zultan_3puestos_gray.jpeg",
          color: "gray"
        },
        {
          img: "sofa_zultan_3puestos_gray_white.jpeg",
          color: "black",
        },
        {
          img: "sofa_zultan_3puestos_beige.jpeg",
          color: "beige",
        },
        {
          img: "sofa_zultan_3puestos_white.jpeg",
          color: "white",
        },
      ]
    },
    {
      id: 1017,
      name: "Sofa Normandy",
      desc: "El sofá Normandy 3 puestos destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_normandy_beige.jpeg",
      suggest: [1007, 1005],
      colors: [
        {
          img: "sofa_normandy_beige.jpeg",
          color: "beige"
        },
        {
          img: "sofa_normandy_gray.jpeg",
          color: "gray"
        },
        {
          img: "sofa_normandy_blue.jpeg",
          color: "blue",
        },
        {
          img: "sofa_normandy_brown.jpeg",
          color: "brown",
        },
      ]
    },
    {
      id: 1019,
      name: "Sofa Paris",
      desc: "El sofá Paris destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_paris_white.jpeg",
      suggest: [1021, 1019],
      colors: [
        {
          img: "sofa_paris_white.jpeg",
          color: "white"
        },
        {
          img: "sofa_paris_gray_white.jpeg",
          color: "#717171",
        },
        {
          img: "sofa_paris_black.jpeg",
          color: "black",
        },
      ]
    },
    {
      id: 1019,
      name: "Sofa Suiza",
      desc: "El sofá Suiza destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_suiza_beige.jpeg",
      suggest: [1021, 1018],
      colors: [
        {
          img: "sofa_suiza_beige.jpeg",
          color: "beige"
        },
        {
          img: "sofa_suiza_gray.jpeg",
          color: "gray",
        },
        {
          img: "sofa_suiza_black.jpeg",
          color: "black",
        },
        {
          img: "sofa_suiza_white.jpeg",
          color: "white",
        },
        {
          img: "sofa_suiza_gray_white.jpeg",
          color: "#7b7b7b",
        },
      ]
    },
    {
      id: 1020,
      name: "Sofa Nigeria",
      desc: "El sofá Nigeria destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_nigeria_beige.jpeg",
      suggest: [1011, 1008],
      size: "180cm x 180cm",
      colors: [
        {
          img: "sofa_nigeria_beige.jpeg",
          color: "beige"
        },
        {
          img: "sofa_nigeria_black.jpeg",
          color: "black",
        },
        {
          img: "sofa_nigeria_white.jpeg",
          color: "white",
        },
        {
          img: "sofa_nigeria_gray.jpeg",
          color: "gray",
        },
      ]
    },
    {
      id: 1021,
      name: "Sofa Barco",
      desc: "El sofá barco 2 puestos destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_barco_white.jpeg",
      size: "120cm x 140cm",
      suggest: [1019, 1018],
      colors: [
        {
          img: "sofa_barco_white.jpeg",
          color: "white"
        },
        {
          img: "sofa_barco_gray.jpeg",
          color: "gray",
        },
        {
          img: "sofa_barco_black.jpeg",
          color: "black",
        },
        {
          img: "sofa_barco_beige.jpeg",
          color: "beige",
        }
      ]
    },
    {
      id: 1023,
      name: "Sofa Cama",
      desc: "El sofá cama de 3 plazas destaca como una pieza excepcional que combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para la versatilidad y comodidad de los invitados inesperados.",
      img: "sofa_sofa_cama_beige.jpeg",
      size: "180cm x 160cm",
      suggest: [1020, 1021],
      colors: [
        {
          img: "sofa_sofa_cama_beige.jpeg",
          color: "beige"
        },
        {
          img: "sofa_sofa_cama_gray.jpeg",
          color: "gray",
        },
        {
          img: "sofa_sofa_cama_gray_black.jpeg",
          color: "#525252",
        },
        {
          img: "sofa_sofa_cama_black_gray.jpeg",
          color: "#424242",
        },
        {
          img: "sofa_sofa_cama_beige_down.jpeg",
          color: "beige",
        },
      ]
    },
    {
      id: 1024,
      name: "Sofa Lineal",
      desc: "Diseñado para integrarse con sofisticación en entornos corporativos y áreas de gran escala, nuestro sofá lineal modular es la máxima expresión de la funcionalidad arquitectónica. Gracias a su innovador sistema de comercialización por metro lineal, este modelo ofrece una libertad creativa total, permitiendo configurar piezas continuas que se adaptan con precisión milimétrica a la geometría de su proyecto. Una solución que combina estética de vanguardia con un soporte ergonómico excepcional.",
      img: "sofa_lineal.png",
      size: "120cm x 140cm",
      suggest: [1014, 1015],
      colors: [
        {
          img: "sofa_lineal.png",
          color: "red"
        },
        {
          img: "sofa_lineal_beige.png",
          color: "beige",
        },
      ]
    },
  ],
  colchones: [
    {
      id: 2007,
      name: "Europillow",
      desc: "El colchón ortopédico Europillow Serta es una elección de alta calidad para aquellos que buscan un descanso reparador. Este modelo cuenta con una garantía de 10 años y está equipado con 405 resortes electrónicamente templados que otorgan una mayor firmeza y estabilidad al dormir. Su felpa de mezcla de algodón y polímeros importada, junto con su encapsulado en poliuretano de 32kg/m³ de densidad, proporciona una sensación de confort y suavidad al dormir.",
      img: "colchon_serta_europillow.png",
            colors: [
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#633e3e",
        // },
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#333333"
        // }
      ]
    },
    {
      id: 2001,
      name: "Serta Foam",
      desc: "El colchón Serta Foam 2 años de garantía es 100% antialérgico lo cual ayudara a dormir mejor durante las noches, su estructura esta compuesta de Poliuretano de alta densidad(HD) donde te sentirás super cómodo al acostarte. ya que posee un polímero al 30% de 20 kg/m³ de densidad que  garantizan una sensación muy suave, además su tela importada de punto  importada te garantiza durabilidad. Además este Modelo es Fácil de transportar ya que puede ser empacado al vacío. quedando envuelto para la facilidad de manejo.",
      img: "colchon_serta_foam_.png",
      colors: [
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#633e3e",
        // },
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#333333"
        // }
      ]
    },
    {
      id: 2008,
      name: "Therapedic",
      desc: "El Therapedic Serta ortopédico es una opción excepcional para aquellos que buscan un descanso óptimo. Con una garantía de 10 años, cuenta con 405 resortes electrónicamente templados que brindan una mayor firmeza y estabilidad al dormir. Su felpa de mezcla de algodón y polímeros importada, junto con su encapsulado en poliuretano de 32kg/m³ de densidad, garantizan una sensación de confort y suavidad",
      img: "colchon_serta_therapic.png",
            colors: [
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#633e3e",
        // },
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#333333"
        // }
      ]
    },
    {
      id: 2002,
      name: "S&CO",
      desc: "El colchón Las S&CO Colflex Semiortopédico ofrece un descanso de calidad con 4 años de garantía. Cuenta con 312 resortes electrónicamente templados que proporcionan un soporte óptimo. Su felpa de mezcla de algodón y polímeros importada brinda comodidad excepcional. Además, las láminas de poliuretano flexible de 20 kg/m³ de densidad garantizan una sensación de suavidad. Acolchado con tela importada de 280 gramos por metro cuadrado, este colchón es una opción ideal para un sueño reparador",
      img: "colchon_colflex_syco.png",
      colors: [
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#633e3e",
        // },
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#333333"
        // }
      ]
    },
    {
      id: 2003,
      name: "Las Vegas",
      desc: "El colchón Las Vegas Colflex Semiortopédico ofrece un descanso de calidad con 4 años de garantía. Cuenta con 312 resortes electrónicamente templados que proporcionan un soporte óptimo. Su felpa de mezcla de algodón y polímeros importada brinda comodidad excepcional. Además, las láminas de poliuretano flexible de 20 kg/m³ de densidad garantizan una sensación de suavidad. Acolchado con tela importada de 280 gramos por metro cuadrado, este colchón es una opción ideal para un sueño reparador",
      img: "colchon_colflex_vegas.png",
            colors: [
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#633e3e",
        // },
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#333333"
        // }
      ]
    },
   {
      id: 2004,
      name: "Collection",
      desc: "El colchón Collection Flex semi ortopédico de Colflex es una elección inigualable para un descanso óptimo y saludable. Con 350 resortes estratégicamente distribuidos, brinda un soporte excepcional y revitalizante. Con garantía de 5 años y altura de 25 cm, asegura durabilidad y comodidad. La tela importada antiácaros favorece tu descanso ya que no sentirás nada al dormir. En resumen, este colchón ofrece calidad, comodidad y durabilidad, siendo ideal para lograr un buen descanso.",
      img: "colchon_colflex_collection.png",
            colors: [
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#633e3e",
        // },
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#333333"
        // }
      ]
      // colors: [
      //   {
      //     img: "16_9_cairo_gris_claro.jpg",
      //     color: "#633e3e",
      //   },
      //   {
      //     img: "16_9_cairo_gris_claro.jpg",
      //     color: "#333333"
      //   }
      // ]
    },
    {
      id: 2005,
      name: "Collection 1 pillow",
      desc: "El colchón Collection Flex pillow top ortopédico de Colflex sobresale como una elección inigualable para aquellos que buscan un descanso óptimo con un enfoque en la salud postural. Sus 350 resortes estratégicamente distribuidos brindan un soporte excepcional, asegurando que cada noche de sueño sea verdaderamente revitalizante. Con una generosa garantía de 6 años y una altura de 26 cm, este colchón garantiza una experiencia duradera y placentera, mientras que la tela importada antiácaros contribuye a un ambiente limpio y saludable para dormir. En resumen, el colchón Collection Flex pillow top ortopédico de Colflex ofrece una combinación única de calidad, comodidad y durabilidad. Es la opción ideal para aquellos que valoran su bienestar y desean disfrutar de un descanso reparador que revitalice cuerpo y mente noche tras noche.",
      img: "colchon_colflex_collection_pillow_top.png",
            colors: [
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#633e3e",
        // },
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#333333"
        // }
      ]
    },
    {
      id: 2006,
      name: "collection 2 pillow",
      desc: "El colchón Collection Flex Doble Pillow ortopédico de Colflex destaca como una excelente alternativa para aquellos que buscan una opción ortopédica de calidad. Equipado con 350 resortes que brindan un soporte óptimo, cuenta con una garantía de 6 años y una altura de 28 cm, asegurando comodidad y estabilidad. Su tela importada anti ácaros garantizan un descanso reparador, que te ayudaran levantar todos días de excelente animo.",
      img: "colchon_colflex_double_pillow_top.png",
            colors: [
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#633e3e",
        // },
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#333333"
        // }
      ]
    },
    {
      id: 2009,
      name: "Performance",
      desc: "El colchón ortopédico Performance Sleep de la marca Colflex es una magnífica elección para aquellos que buscan un descanso de primera calidad. Este modelo cuenta con una garantía de 12 años y está equipado con 1088 resortes electrónicamente templados y embolsados mediante el sistema Pocket Coils, lo que asegura una mayor firmeza y estabilidad al dormir. ",
      img: "colchon_colflex_performance.png",
            colors: [
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#633e3e",
        // },
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#333333"
        // }
      ]
    },
    {
      id: 2010,
      name: "Lady Best",
      desc: "Este Colchón es una excelente opción para quienes buscan una superficie de descanso de alta calidad. Con una garantía de 10 años, cuenta con 405 resortes electrónicamente templados que brindan una mayor firmeza y estabilidad.",
      img: "colchon_colflex_lady_best.png",
            colors: [
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#633e3e",
        // },
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#333333"
        // }
      ]
    },
    {
      id: 2021,
      name: "Dallas",
      desc: "El colchón ortopédico Dallas Pillow de la marca Colflex es una excelente opción para aquellos que buscan un descanso pleno durante la noche. Cuenta con una garantía de 8 años y está equipado con 350 resortes electrónicamente templados los cuales te haran sentir firme al dormir. ",
      img: "colchon_colflex_dallas.png",
            colors: [
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#633e3e",
        // },
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#333333"
        // }
      ]
    },
    {
      id: 2011,
      name: "San Remo",
      desc: "Este colchón te permite disfrutar de una superficie acolchada y un soporte firme para un sueño reparador.",
      img: "colchon_imperia_sanremo.jpg",
            colors: [
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#633e3e",
        // },
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#333333"
        // }
      ]
    },
    {
      id: 2012,
      name: "San Remo 1 Pillow",
      desc: "Diseñado para ofrecer el equilibrio perfecto entre suavidad y firmeza. Su capa superior acolchada proporciona una sensación acogedora y envolvente.",
      img: "colchon_imperia_sanremo_pillow_top.jpg",
            colors: [
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#633e3e",
        // },
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#333333"
        // }
      ]
    },
    {
      id: 2013,
      name: "San Remo 2 Pillow",
      desc: "Experimente la máxima comodidad con nuestro colchón acolchado de doble capa San Remo, diseñado con capas acolchadas en ambos lados.",
      img: "colchon_imperia_sanremo_doblepillow_top.jpg",
            colors: [
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#633e3e",
        // },
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#333333"
        // }
      ]
    },
    // {
    //   id: 2014,
    //   name: "Atlanta",
    //   desc: "descripcion sofa cairo",
    //   img: "colchon_eclipse.png",
    //   colors: [
    //     {
    //       img: "16_9_cairo_gris_claro.jpg",
    //       color: "#633e3e",
    //     },
    //     {
    //       img: "16_9_cairo_gris_claro.jpg",
    //       color: "#333333"
    //     }
    //   ]
    // },
    // {
    //   id: 2015,
    //   name: "Nevada 2 Pillow",
    //   desc: "descripcion sofa cairo",
    //   img: "colchon_eclipse.png",
    //   colors: [
    //     {
    //       img: "16_9_cairo_gris_claro.jpg",
    //       color: "#633e3e",
    //     },
    //     {
    //       img: "16_9_cairo_gris_claro.jpg",
    //       color: "#333333"
    //     }
    //   ]
    // },
    {
      id: 2016,
      name: "Damiflex",
      desc: "El colchón ortopédico Damiflex de la marca Lara es una excelente opción para aquellos que buscan un descanso pleno durante la noche. Cuenta con una garantía de 8 años y está equipado con 350 resortes electrónicamente templados los cuales te haran sentir firme al dormir. ",
      img: "colchon_lara_damiflex_top_pillow.jpeg",
            colors: [
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#633e3e",
        // },
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#333333"
        // }
      ]
    },
    {
      id: 2017,
      name: "Damiflex 1 Pillow",
      desc: "El colchón ortopédico Damiflex Pillow de la marca Lara es una excelente opción para aquellos que buscan un descanso pleno durante la noche. Cuenta con una garantía de 8 años y está equipado con 350 resortes electrónicamente templados los cuales te haran sentir firme al dormir. ",
      img: "colchon_lara_damiflex_top.jpeg",
            colors: [
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#633e3e",
        // },
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#333333"
        // }
      ]
    },
    {
      id: 2018,
      name: "Fi-Li",
      desc: "El colchón ortopédico Fi-Li de la marca Lara es una excelente opción para aquellos que buscan un descanso pleno durante la noche. Cuenta con una garantía de 8 años y está equipado con 350 resortes electrónicamente templados los cuales te haran sentir firme al dormir. ",
      img: "colchon_lara_fili.jpeg",
            colors: [
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#633e3e",
        // },
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#333333"
        // }
      ]
    },
    {
      id: 2022,
      name: "Talamo",
      desc: "El colchón ortopédico Talamo Pillow de la marca Lara es una excelente opción para aquellos que buscan un descanso pleno durante la noche. Cuenta con una garantía de 8 años y está equipado con 350 resortes electrónicamente templados los cuales te haran sentir firme al dormir. ",
      img: "colchon_lara_talamo.jpg",
            colors: [
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#633e3e",
        // },
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#333333"
        // }
      ]
    },
    {
      id: 2023,
      name: "Maya",
      desc: "El colchón ortopédico Maya Pillow de la marca Lara es una excelente opción para aquellos que buscan un descanso pleno durante la noche. Cuenta con una garantía de 8 años y está equipado con 350 resortes electrónicamente templados los cuales te haran sentir firme al dormir. ",
      img: "colchon_lara_maya.png",
            colors: [
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#633e3e",
        // },
        // {
        //   img: "16_9_cairo_gris_claro.jpg",
        //   color: "#333333"
        // }
      ]
    },
  ],
  comedores: [
    {
      id: 3001,
      name: "Isabel Arteco",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "comedor_isabel_v.jpeg",
      size: "Largo: 190cm - Ancho: 90cm",
      chairs_6:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#3f0b0b"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0a134a"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#520131"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ea13aa"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#c8c8c8"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#eb0d69"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
          ],
        },
      ],
      chairs_4:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#09ff00"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffd500"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#1d1dc4"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#fdf906"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0037ff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ff0000"
            },
          ],
        },
      ]
    },
    {
      id: 3002,
      name: "Isabel Torre",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "comedor_isabel_torre.jpeg",
      size: "Largo: 190cm - Ancho: 90cm",
      chairs_6:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#3f0b0b"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0a134a"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#520131"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ea13aa"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#c8c8c8"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#eb0d69"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
          ],
        },
      ],
      chairs_4:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#09ff00"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffd500"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#1d1dc4"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#fdf906"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0037ff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ff0000"
            },
          ],
        },
      ]
    },
    {
      id: 3003,
      name: "Isabel 4D",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "comedor_isabel_v.jpeg",
      size: "Largo: 190cm - Ancho: 90cm",
      chairs_6:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#3f0b0b"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0a134a"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#520131"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ea13aa"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#c8c8c8"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#eb0d69"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
          ],
        },
      ],
      chairs_4:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#09ff00"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffd500"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#1d1dc4"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#fdf906"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0037ff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ff0000"
            },
          ],
        },
      ]
    },
    {
      id: 3004,
      name: "Isabel V",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "comedor_isabel_v.jpeg",
      size: "Largo: 190cm - Ancho: 90cm",
      chairs_6:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#3f0b0b"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0a134a"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#520131"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ea13aa"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#c8c8c8"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#eb0d69"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
          ],
        },
      ],
      chairs_4:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#09ff00"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffd500"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#1d1dc4"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#fdf906"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0037ff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ff0000"
            },
          ],
        },
      ]
    },
    {
      id: 3005,
      name: "Saturno Arteco",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "no_picture.png",
      size: "Largo: 190cm - Ancho: 90cm",
      chairs_6:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#3f0b0b"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0a134a"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#520131"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ea13aa"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#c8c8c8"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#eb0d69"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
          ],
        },
      ],
      chairs_4:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#09ff00"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffd500"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#1d1dc4"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#fdf906"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0037ff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ff0000"
            },
          ],
        },
      ]
    },
    {
      id: 3006,
      name: "Saturno Torre",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "no_picture.png",
      size: "Largo: 190cm - Ancho: 90cm",
      chairs_6:[
        {
          top: "vidrio",
          img: "no_picture.png",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#3f0b0b"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0a134a"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#520131"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ea13aa"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#c8c8c8"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#eb0d69"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
          ],
        },
      ],
      chairs_4:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#09ff00"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffd500"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#1d1dc4"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#fdf906"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0037ff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ff0000"
            },
          ],
        },
      ]
    },
    {
      id: 3007,
      name: "Saturno 4D",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "no_picture.png",
      size: "Largo: 190cm - Ancho: 90cm",
      chairs_6:[
        {
          top: "vidrio",
          img: "no_picture.png",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#3f0b0b"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0a134a"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#520131"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ea13aa"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#c8c8c8"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#eb0d69"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
          ],
        },
      ],
      chairs_4:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#09ff00"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffd500"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#1d1dc4"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#fdf906"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0037ff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ff0000"
            },
          ],
        },
      ]
    },
    {
      id: 3008,
      name: "Saturno V",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "comedor_saturno_pvc.png",
      size: "Largo: 190cm - Ancho: 90cm",
      chairs_6:[
        {
          top: "pvc",
          img: "comedor_saturno_pvc.png",
          colors: [
            {
              img: "comedor_saturno_pvc.png",
              color:"#ffffff"
            },
            {
              img: "comedor_saturno_pvc.png",
              color:"#ffffff"
            },
            {
              img: "comedor_saturno_pvc.png",
              color:"#ffffff"
            },
          ],
        },
        {
          top: "vidrio",
          img: "comedor_saturno_vidrio.png",
          colors: [
            {
              img: "comedor_saturno_vidrio.png",
              color:"#3f0b0b"
            },
            {
              img: "comedor_saturno_vidrio.png",
              color:"#0a134a"
            },
            {
              img: "comedor_saturno_vidrio.png",
              color:"#520131"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_saturno_pintado.png",
          colors: [
            {
              img: "comedor_saturno_pintado.png",
              color:"#ea13aa"
            },
            {
              img: "comedor_saturno_pintado.png",
              color:"#a126b4"
            },
            {
              img: "comedor_saturno_pintado.png",
              color:"#eb0d69"
            },
          ],
        },
      ],
      chairs_4:[
        {
          top: "vidrio",
          img: "comedor_saturno_vidrio.png",
          colors: [
            {
              img: "comedor_saturno_vidrio.png",
              color:"#333"
            },
            {
              img: "comedor_saturno_vidrio.png",
              color:"#333"
            },
            {
              img: "comedor_saturno_vidrio.png",
              color:"#333"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_saturno_pintado.png",
          colors: [
            {
              img: "comedor_saturno_pintado.png",
              color:"#09ff00"
            },
            {
              img: "comedor_saturno_pintado.png",
              color:"#ffd500"
            },
            {
              img: "comedor_saturno_pintado.png",
              color:"#1d1dc4"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_saturno_pvc.png",
          colors: [
            {
              img: "comedor_saturno_pvc.png",
              color:"#fdf906"
            },
            {
              img: "comedor_saturno_pvc.png",
              color:"#0037ff"
            },
            {
              img: "comedor_saturno_pvc.png",
              color:"#ff0000"
            },
          ],
        },
      ]
    },
    {
      id: 3009,
      name: "Luna Arteco",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "no_picture.png",
      size: "Largo: 190cm - Ancho: 90cm",
      chairs_6:[
        {
          top: "vidrio",
          img: "no_picture.png",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#3f0b0b"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0a134a"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#520131"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ea13aa"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#c8c8c8"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#eb0d69"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
          ],
        },
      ],
      chairs_4:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#09ff00"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffd500"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#1d1dc4"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#fdf906"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0037ff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ff0000"
            },
          ],
        },
      ]
    },
    {
      id: 3010,
      name: "Luna Torre",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "no_picture.png",
      size: "Largo: 190cm - Ancho: 90cm",
      chairs_6:[
        {
          top: "vidrio",
          img: "no_picture.png",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#3f0b0b"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0a134a"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#520131"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ea13aa"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#c8c8c8"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#eb0d69"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
          ],
        },
      ],
      chairs_4:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#09ff00"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffd500"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#1d1dc4"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#fdf906"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0037ff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ff0000"
            },
          ],
        },
      ]
    },
    {
      id: 3011,
      name: "Luna 4D",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "no_picture.png",
      size: "Largo: 190cm - Ancho: 90cm",
      chairs_6:[
        {
          top: "vidrio",
          img: "no_picture.png",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#3f0b0b"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0a134a"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#520131"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ea13aa"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#c8c8c8"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#eb0d69"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
          ],
        },
      ],
      chairs_4:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#09ff00"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffd500"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#1d1dc4"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#fdf906"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0037ff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ff0000"
            },
          ],
        },
      ]
    },
    {
      id: 3012,
      name: "Luna V",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "no_picture.png",
      size: "Largo: 190cm - Ancho: 90cm",
      chairs_6:[
        {
          top: "vidrio",
          img: "no_picture.png",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#3f0b0b"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0a134a"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#520131"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ea13aa"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#c8c8c8"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#eb0d69"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
          ],
        },
      ],
      chairs_4:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#09ff00"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffd500"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#1d1dc4"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#fdf906"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0037ff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ff0000"
            },
          ],
        },
      ]
    },
    {
      id: 3013,
      name: "Lily Arteco",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "no_picture.png",
      size: "Largo: 190cm - Ancho: 90cm",
      chairs_6:[
        {
          top: "vidrio",
          img: "no_picture.png",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#3f0b0b"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0a134a"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#520131"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ea13aa"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#c8c8c8"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#eb0d69"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
          ],
        },
      ],
      chairs_4:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#09ff00"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffd500"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#1d1dc4"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#fdf906"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0037ff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ff0000"
            },
          ],
        },
      ]
    },
    {
      id: 3014,
      name: "Lily Torre",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "no_picture.png",
      size: "Largo: 190cm - Ancho: 90cm",
      chairs_6:[
        {
          top: "vidrio",
          img: "no_picture.png",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#3f0b0b"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0a134a"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#520131"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ea13aa"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#c8c8c8"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#eb0d69"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
          ],
        },
      ],
      chairs_4:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#09ff00"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffd500"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#1d1dc4"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#fdf906"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0037ff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ff0000"
            },
          ],
        },
      ]
    },
    {
      id: 3015,
      name: "Lily 4D",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "no_picture.png",
      size: "Largo: 190cm - Ancho: 90cm",
      chairs_6:[
        {
          top: "vidrio",
          img: "no_picture.png",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#3f0b0b"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0a134a"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#520131"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ea13aa"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#c8c8c8"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#eb0d69"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
          ],
        },
      ],
      chairs_4:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#09ff00"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffd500"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#1d1dc4"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#fdf906"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0037ff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ff0000"
            },
          ],
        },
      ]
    },
    {
      id: 3016,
      name: "Lily V",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "no_picture.png",
      size: "Largo: 190cm - Ancho: 90cm",
      chairs_6:[
        {
          top: "vidrio",
          img: "no_picture.png",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#3f0b0b"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0a134a"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#520131"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ea13aa"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#c8c8c8"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#eb0d69"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffffff"
            },
          ],
        },
      ],
      chairs_4:[
        {
          top: "vidrio",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#333"
            },
          ],
        },
        {
          top: "pintado",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#09ff00"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ffd500"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#1d1dc4"
            },
          ],
        },
        {
          top: "pvc",
          img: "comedor_isabel_v.jpeg",
          colors: [
            {
              img: "comedor_isabel_v.jpeg",
              color:"#fdf906"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#0037ff"
            },
            {
              img: "comedor_isabel_v.jpeg",
              color:"#ff0000"
            },
          ],
        },
      ]
    },
  ],
  multimuebles: [
    {
      id: 4001,
      name: "Closet Margarita",
      size: "Alto: 61cm - Ancho: 180cm",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "multimueble_closet_margarita_brown.jpg",
      colors: [
        {
          img: "multimueble_closet_margarita_brown.jpg",
          color: "#a06218",
        }
      ]
    },
    {
      id: 4002,
      name: "Caju 4 puertas",
      size: "Alto: 200cm - Ancho: 121cm",
      desc: "El ropero Caju es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "multimueble_closet_margarita_mid_medium_brown.jpg",
      open: "multimueble_closet_margarita_medium_plus_open.jpg",
      colors: [
        {
          img: "multimueble_closet_margarita_mid_medium_brown.jpg",
          color: "#a06218",
        },
        {
          img: "multimueble_closet_margarita_medium_plus_white.jpg",
          color: "#ffffff",
        }
      ]
    },
    {
      id: 4003,
      name: "Caju 6 puertas",
      size: "Alto: 180cm - Ancho: 200cm",
      desc: "El ropero Caju es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "multimueble_closet_margarita_plus_brown.jpg",
      open: "multimueble_caju_6_puertas_open.jpeg",
      colors: [
        {
          img: "multimueble_closet_margarita_plus_brown.jpg",
          color: "#a06218",
        },
        {
          img: "multimueble_closet_margarita_plus_white.jpg",
          color: "#ffffff",
        }
      ]
    },
    {
      id: 4004,
      name: "Peinadora Agne",
      size: "Alto: 138cm - Ancho: 124cm",
      desc: "El peinadora Agne es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "multimueble_vanity_white.jpg",
      colors: [
        {
          img: "multimueble_vanity_white.jpg",
          color: "#f6f6f6",
        }
      ]
    },
    {
      id: 4005,
      name: "Peinadora B700",
      size: "Alto: 158cm - Ancho: 115cm",
      desc: "El peinadora B700 es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "multimueble_gabetero_con_espejo_cuadrado_white.jpg",
      colors: [
        {
          img: "multimueble_gabetero_con_espejo_cuadrado_white.jpg",
          color: "#f6f6f6",
        }
      ]
    },
    {
      id: 4006,
      name: "Closet Monaco",
      size: "Alto: 191cm - Ancho: 69cm",
      desc: "El ropero Monaco es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "multimueble_closet_margarita_mid_brown.jpg",
      open: "multimueble_closet_margarita_medium_open.jpg",
      colors: [
        {
          img: "multimueble_closet_margarita_mid_brown.jpg",
          color: "#a06218",
        }
      ]
    },
    {
      id: 4007,
      name: "Ropero Berlin",
      size: "Alto: 191cm - Ancho: 106cm",
      desc: "El ropero Berlin elaborado en mdf laqueado, es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "multimueble_closet_acai_medium_white.jpg",
      open: "multimueble_closet_margarita_medium_plus_open.jpg",
      colors: [
        {
          img: "multimueble_closet_acai_medium_white.jpg",
          color: "#ffffff",
        },
        {
          img: "multimueble_closet_acai_medium_brown.jpg",
          color: "#7e4305",
        }
      ]
    },
    {
      id: 4008,
      name: "Ropero Alemania",
      size: "Alto: 191cm - Ancho: 138cm",
      desc: "El ropero Alemania elaborado en mdf laqueado, es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "multimueble_closet_margarita_plus_white.jpg",
      open: "multimueble_closet_margarita_plus_open.jpg",
      colors: [
        {
          img: "multimueble_closet_margarita_plus_white.jpg",
          color: "#ffffff",
        }
      ]
    },
    {
      id: 4009,
      name: "Campeche",
      size: "Alto: 65cm - Ancho: 48cm",
      desc: "El Campeche elaborado en mdf laqueado, es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "multimueble_chifonier_001.jpg",
      colors: [
        {
          img: "multimueble_chifonier_001.jpg",
          color: "#f6f6f6",
        }
      ]
    },
    {
      id: 4010,
      name: "Comoda Madrid",
      size: "Alto: 100cm - Ancho: 90cm",
      desc: "La comoda Madrid es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "multimueble_chifonier_002.jpg",
      open: "multimueble_chifonier_002_open.jpg",
      colors: [
        {
          img: "multimueble_chifonier_002.jpg",
          color: "#f6f6f6",
        }
      ]
    },
    {
      id: 4011,
      name: "Ropero Paris",
      size: "Alto: 191cm - Ancho: 106cm",
      desc: "El Ropero Paris es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "multimueble_closet_caju.jpg",
      colors: [
        {
          img: "multimueble_closet_caju.jpg",
          color: "#ffffff",
        }
      ]
    },
    {
      id: 4012,
      name: "Ropero Francia",
      size: "Alto: 191cm - Ancho: 171cm",
      desc: "El ropero Francia es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "multimueble_closet_caju_plus.jpg",
      open: "multimueble_closet_caju_plus_open.jpg",
      colors: [
        {
          img: "multimueble_closet_caju_plus.jpg",
          color: "#ffffff",
        }
      ]
    },
    {
      id: 4013,
      name: "Ropero Acai 3 puertas",
      size: "Alto: 191cm - Ancho: 171cm",
      desc: "El ropero Francia es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "no_picture.png",
      open: "multimueble_closet_caju_plus_open.jpg",
      colors: [
        {
          img: "multimueble_closet_caju_plus.jpg",
          color: "#ffffff",
        }
      ]
    },
    {
      id: 4014,
      name: "Ropero Duetto",
      size: "Alto: 191cm - Ancho: 171cm",
      desc: "El ropero Francia es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "multimueble_closet_duetto_marron.png",
      colors: [
        {
          img: "multimueble_closet_duetto_marron.png",
          color: "#683f05",
        },
        {
          img: "multimueble_closet_duetto_white.png",
          color: "#683f05",
        }
      ]
    },
    {
      id: 4015,
      name: "Ropero Barcelona",
      size: "Alto: 191cm - Ancho: 171cm",
      desc: "El ropero Francia es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "no_picture.png",
      open: "multimueble_closet_caju_plus_open.jpg",
      colors: [
        {
          img: "multimueble_closet_caju_plus.jpg",
          color: "#ffffff",
        }
      ]
    },
  ],
  accesorios: [
    {
      id: 5000,
      name: "Ropero Francia",
      size: "Alto: 191cm - Ancho: 171cm",
      desc: "El ropero Francia es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "multimueble_closet_caju_plus.jpg",
      colors: [
        {
          img: "multimueble_closet_caju_plus.jpg",
          color: "#ffffff",
        }
      ]
    }
  ]
};
