import { Card, Image, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useFetch } from "../hooks";
import { Link, useParams } from "react-router-dom";
import { getRandomAdvice } from "../api";
import { Loader, Texts } from "../components";
import { dividerDesktop, dividerMobile, icon } from "../assets";

function Home() {
  const { id } = useParams();
  const [fetchKey, setFetchKey] = useState(0);
  const { data, error, isLoading } = useFetch(getRandomAdvice, id, fetchKey);
  const [randomAdvice, setRandomAdvice] = useState(null);

  useEffect(() => {
    if (data.slip && !randomAdvice) {
      const adviceArray = Object.values(data.slip);
      const randomIndex = Math.floor(Math.random() * adviceArray.lenght);
      console.log("Calling setRandomAdvice with:", adviceArray[randomIndex]);
      setRandomAdvice({ advice: adviceArray[1], id: adviceArray[0] });
    }
  }, [data, randomAdvice]);

  const handleNewAdvice = () => {
    setFetchKey((prevKey) => prevKey + 1);
    setRandomAdvice(null);
  };

  return (
    <>
      {error && (
        <Alert variant="danger" className="mt-4">
          {error}
        </Alert>
      )}
      {isLoading && <Loader />}
      {!error && !isLoading && data && (
        <Card className="card">
          {randomAdvice && (
            <Card.Body key={randomAdvice.id} className="card_body">
              <Texts
                text={
                  <>
                    ADVICE <span> #{`${randomAdvice.id}`}</span>
                  </>
                }
              />

              <Card.Text>
                <Texts text={`"${randomAdvice.advice}"`}
                size="1rem"
                className="card_text"/>
                <br />
                <Image src={dividerDesktop} className="divider_desktop" />
                <Image src={dividerMobile} className="divider_mobile" />
                <Link
                  className="icon_dice"
                  onClick={handleNewAdvice}
                >
                  <Image src={icon} alt="icon-dice" />
                </Link>
              </Card.Text>
            </Card.Body>
          )}
        </Card>
      )}
    </>
  );
}

export default Home;
