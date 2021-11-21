import React from "react";
import { Grid, GridItem, Flex, Heading } from "@chakra-ui/react";
import Card from "../TestimoniCard/TestimoniCard";

const Testimoni = () => {
  const content = [
    {
      nama: "Andi Topi",
      perusahaan: "SemuaSama User",
      desc: "Keren banget aplikasi ini, very helpful dan membuat saya mendapatkan pekerjaan",
      rating: 5,
    },
    {
      nama: "Siti Spakbor",
      perusahaan: "HR at PT Mencari Cinta",
      desc: "SemuaSama sangat membantu perusahaan saya mencari talenta terbaik dan menjalankan kewajiban perusahaan dalam pemberdayaan difabel",
      rating: 4,
    },
    {
      nama: "Ariel Darat",
      perusahaan: "SemuaSama User",
      desc: "Terimakasih SemuaSama, sangat membantu saya mencari pekerjaan di masa pandemi dan di tengah keterbatasan yang saya miliki",
      rating: 5,
    },
  ];

  return (
    <Flex flexDir="column" alignItems="center" bgImg="url('/assets/images/testi bg.png')" bgRepeat="no-repeat" bgSize="content" bgPos="right">
      <Heading fontWeight="extrabold" fontSize="6xl">
        What They Said About Us
      </Heading>

      <Grid p="8rem 2rem 8rem 2rem" mb="10rem" templateColumns="repeat(3, 1fr)" gridGap="2.5rem">
        {content.map((c) => (
          <Card nama={c.nama} perusahaan={c.perusahaan} testi={c.desc} rating={c.rating} />
        ))}
      </Grid>
    </Flex>
  );
};

export default Testimoni;
