import logo from '../../assets/logo.png';

import {StyleHeader} from "./styleHeaderComponent.js";
export default function Header() {
  return (
    <StyleHeader>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/*<p className={classes.paragraph}>A community of artists and art-lovers.</p>*/}
      <p>A community of artists and art-lovers.</p>
    </StyleHeader>
  );
}
