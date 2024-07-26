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
      <p>
        This picture loads as expected. I only download "a.avif" in network tab.
      </p>

      <picture>
        <source type="image/avif" srcSet="a.avif" />
        <img src="a.png" />
      </picture>

      <p>
        This picture does not load as expected. I am downloading both "b.png"
        and "b.avif" in network tab.
      </p>

      <StyledPicture>
        <source type="image/avif" srcSet="b.avif" />
        <StyledImage src="b.png" />
      </StyledPicture>
    </>
  );
}
