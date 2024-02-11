import { Box, Typography,styled } from "@mui/material";

const Wrapbox = styled(Box)`
    padding : 10px
`

const Detail = () => {
  return (
    <Wrapbox color='#878787'>
      <Typography variant="h5" color='#878787'>
        What Can You Buy From Yogita Dresses?
      </Typography>
      <h4 color="#878787">Lifestyle</h4>
      Yogita Dresses, is your one-stop fashion destination for anything and
      everything you need to look good. Our exhaustive range of Western and
      Indian wear, summer and winter clothing, formal and casual, From summer
      staple maxi dresses, no-nonsense cigarette pants, traditional Bandhani
      kurtis to street-smart biker jackets, you can rely on us for a wardrobe
      that is up to date.for carefully curated designs that are the talk of the
      town. Get ready to be spoiled for choice.Festivals, office get-togethers,
      weddings, or nightwear - Yogita Dresses will have your back each time.
      <h4>Baby and Kids</h4>
      Your kids deserve only the best. From bodysuits, Regular Baby Items,
      if you're an expecting mother or a new mother, you will find
      everything you need to set sail on a smooth parenting journey with the
      help of our baby care collection. When it comes to safety, hygiene and
      comfort, you can rely on us without a second thought. we store only the
      most-trusted names in the business for your baby.
    </Wrapbox>
  );
};

export default Detail;
