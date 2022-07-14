import { GithubIcon } from "../github-icon";
import { WrapperFooter } from "./styles";

export default function Footer() {

  return <WrapperFooter>
    <a aria-label="Repository" title="GitHub" href="https://github.com/GladisonRibeiro/7days_react" target="_blank">
      <GithubIcon />
      &nbsp;
      #7DaysOfCode
    </a>    
  </WrapperFooter>
}