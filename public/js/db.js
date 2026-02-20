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
    image4_5: "/image/4_5_dormitorio_slider.jpg",
    image16_9: "/image/16_9_dormitorio_slider.jpg",
    image21_9: "/image/21_9_dormitorio_slider.jpg",
    slogan_1: "Crea tu espacio",
    slogan_2: "descansa en tu hogar soñado."
  },
  colchones:{
    image4_5: "/image/4_5_dormitorio_slider.jpg",
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
      id: 1,
      name: "Cama Moises",
      desc: "descripcion Cama Moises",
      img: "4_5_cairo_gris_claro.jpg",
      colors: [
        {
          img: "16_9_cairo_gris_claro.jpg",
          color: "#333",
        },
        {
          img: "4_5_cairo_gris_claro.jpg",
          color: "#633e3e",
        },
        {
          img: "21_9_cairo_gris_claro.jpg",
          color: "#333333"
        }
      ]
    },
    {
      id: 2,
      name: "Cama Coco",
      desc: "descripcion cama coco",
      img: "4_5_cairo_gris_claro.jpg",
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
    }
  ],
  sofas: [
    {
      id: 1000,
      name: "Zultan Barriga",
      size: "240cm - 240cm",
      desc: "El sofá Zultan destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_zultan_2_barrigas_beige.png",
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
      id: 1002,
      name: "Zultan Chapa",
      size: "240cm - 240cm",
      desc: "El sofá Zultan destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_zultan_chapa_gray.png ",
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
      id: 1003,
      name: "Zultan Chapa",
      size: "240cm - 240cm",
      desc: "El sofá Zultan destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_zultan_chapa_gray.png ",
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
      id: 1004,
      name: "Mueble L",
      size: "160cm - 240cm",
      desc: "descripcion sofa cairo",
      img: "sofa_muebleL_red.png",
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
      id: 1005,
      name: "Sofa Osman",
      desc: "El sofá Osman destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_osman_white_d.jpg",
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
      id: 1006,
      name: "Sofa Hielo",
      desc: "El sofá Hielo destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_hielo_gray.jpg",
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
      id: 1007,
      name: "Sofa Nube",
      desc: "El sofá Cairo destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_nube_1.jpg",
      colors: [
        {
          img: "sofa_nube_1.jpg",
          color: "#3e3e3e",
        },
        {
          img: "sofa_nube_2.jpg",
          color: "#3e3e3e",
        }
      ]
    },
    {
      id: 1008,
      name: "Sofa Cairo",
      // size: "",
      desc: "El sofá Cairo destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_cairo_beige_d.jpg",
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
      name: "Sofa Toty",
      desc: "El sofá Toty destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_toty_black_d.jpg",
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
      id: 1010,
      name: "Sofa Domus",
      desc: "El sofá Domus destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_domus_gray2.jpg",
      colors: [
        {
          img: "sofa_domus_gray2.jpg",
          color: "gray",
        },
        {
          img: "sofa_domus_beige.jpg",
          color: "beige",
        },
        {
          img: "sofa_domus_black.jpg",
          color: "black"
        }
      ]
    },
    {
      id: 1011,
      name: "Sofa Normandy",
      desc: "El sofá Normandy destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_normandy_beige.jpg",
      colors: [
        {
          img: "sofa_normandy_beige.jpg",
          color: "beige",
        },
        {
          img: "sofa_normandy_black.jpg",
          color: "black",
        },
        {
          img: "sofa_normandy_gray.jpg",
          color: "gray"
        }
      ]
    },
    {
      id: 1012,
      name: "Sofa Enmaly",
      desc: "El sofá Enmaly destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_enmaly_white.jpg",
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
      id: 1013,
      name: "Sofa Roma",
      desc: "El sofá Roma destaca como una pieza excepcional combina una calidad superior con un diseño moderno y elegante que irradia un lujo discreto. Es el mueble perfecto para elevar cualquier espacio con estilo y sofisticación.",
      img: "sofa_roma_black.jpg",
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
  ],
  colchones: [
    {
      id: 2001,
      name: "Colchon Colflex",
      desc: "descripcion sofa cairo",
      img: "4_5_cairo_gris_claro.jpg",
      colors: [
        {
          img: "16_9_cairo_gris_claro.jpg",
          color: "#633e3e",
        },
        {
          img: "16_9_cairo_gris_claro.jpg",
          color: "#333333"
        }
      ]
    }
  ],
  comedores: [
    {
      id: 3001,
      name: "Isabel Arteco",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "comedor_isabel_arteco.jpeg",
      size: "Largo: 190cm - Ancho: 90cm",
      chairs_6:[
        {
          img: "comedor_isabel_arteco.jpeg",
          color: "#121c4d",
        },
        {
          img: "comedor_isabel_torre.jpg",
          color: "#633e3e",
        },
        {
          img: "16_9_cairo_gris_claro.jpg",
          color: "#333333"
        }
      ],
      chairs_4:[
        {
          img: "16_9_cairo_gris_claro.jpg",
          color: "#ffffff"
        },
        {
          img: "comedor_isabel_torre.jpg",
          color: "#14f5fd",
        },
        {
          img: "comedor_isabel_4d.jpg",
          color: "#ff1111",
        },
      ]
    },
    {
      id: 3002,
      name: "Isabel 4D",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "comedor_isabel_4d.jpg",
      size: "Largo: 190cm - Ancho: 90cm",
      chairs_6:[
        {
          img: "comedor_isabel_4d.jpg",
          color: "#333",
        },
        {
          img: "comedor_isabel_torre.jpg",
          color: "#633e3e",
        },
        {
          img: "16_9_cairo_gris_claro.jpg",
          color: "#333333"
        }
      ],
      chairs_4:[
        {
          img: "16_9_cairo_gris_claro.jpg",
          color: "#ffffff"
        },
        {
          img: "comedor_isabel_torre.jpg",
          color: "#14f5fd",
        },
        {
          img: "comedor_isabel_4d.jpg",
          color: "#ff1111",
        },
      ]
    },
    {
      id: 3003,
      name: "Isabel Torre",
      desc: "El ropero Margarita es la solución perfecta para quienes buscan practicidad y estilo. Su diseño intuitivo permite un armado rápido y sin complicaciones, ideal para cualquier espacio. Es ligero, fácil de trasladar y ofrece una organización eficiente que se adapta a tu espacio. Funcional, moderno y conveniente",
      img: "comedor_isabel_torre.jpeg",
      size: "Largo: 190cm - Ancho: 90cm",
      chairs_6:[
        {
          img: "comedor_isabel_torre.jpeg",
          color: "#333",
        },
        {
          img: "comedor_isabel_torre.jpg",
          color: "#633e3e",
        },
        {
          img: "16_9_cairo_gris_claro.jpg",
          color: "#333333"
        }
      ],
      chairs_4:[
        {
          img: "16_9_cairo_gris_claro.jpg",
          color: "#ffffff"
        },
        {
          img: "comedor_isabel_torre.jpg",
          color: "#14f5fd",
        },
        {
          img: "comedor_isabel_4d.jpg",
          color: "#ff1111",
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
      id: 4008,
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
      id: 4009,
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
      id: 4010,
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
      id: 4006,
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
      id: 4007,
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
      id: 4012,
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
