import styled from "@emotion/styled";

const StyledPicture = styled.picture`
  display: contents;
`;

const StyledImage = styled.img`
  display: block;
`;

export default function Home() {
  return (
    <>
      <p>This picture loads as expected. Only a.avif in network tab.</p>

      <picture>
        <source type="image/avif" srcSet="a.avif" />
        <img src="a.jpg" alt="" />
      </picture>

      <p>
        This picture does not load as expected. Both b.jpg and b.avif are
        downloaded in network tab even though only b.avif is eventually shown.
      </p>

      <StyledPicture>
        <source type="image/avif" srcSet="b.avif" />
        <StyledImage src="b.jpg" alt="" />
      </StyledPicture>

      <p>
        This example also doesn't work. It seems to be caused by style tag
        getting added in picture.
      </p>

      <picture>
        <source type="image/avif" srcSet="c.avif" />
        <style />
        <img src="c.jpg" alt="" />
      </picture>
    </>
  );
}
