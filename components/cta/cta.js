import {
  Container,
  FcfeatureWrap,
  PrimaryButton,
  SecondryButton,
} from "../../styles/commonStyles";
import { SectionHeading, CtaInner, CtaBtn, CtaRight, CtaPara } from "./styles";
import Link from "next/link";

export default function CTA() {
  return (
    <>
      <FcfeatureWrap>
        <Container>
          <CtaInner>
            <h2>
              Start, run, and grow <span>your business</span>
            </h2>
            <CtaBtn>
              <PrimaryButton>
                <Link href="/">
                  <a>Start Trial</a>
                </Link>
              </PrimaryButton>
              <SecondryButton>
                <Link href="/request-demo">
                  <a>Book Demo</a>
                </Link>
              </SecondryButton>
            </CtaBtn>
          </CtaInner>
        </Container>
      </FcfeatureWrap>
    </>
  );
}
