import styled from "styled-components"

export const Item = styled.div`
  border-radius: 0;
  background-color: #333;
  border-left: 0;
  border-right: 0;
  border-color: #2c2c2c;
  white-space: nowrap;

  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -ms-flex-align: center;
  align-items: center;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  border: 1px solid rgba(0, 0, 0, 0.125);

	color: white;
`

export const ItemBrand = styled.div`
  padding: 1rem 0rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  font-size: 16pt;
  text-align: center;
  margin: auto;

	color: white;
`
