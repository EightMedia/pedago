import { Button } from "../../../components/Button";
import { Page } from "../../../components/Page";
import { Panel, PanelTitle } from "../../../components/Panel";
import { Text } from "../../../components/Text";
import { TextTitle } from "../../../components/TextTitle";
import { Stack } from "../../../layouts/Stack";

export type GameOnboardingProps = {
  title: string;
};

export const GameInfo = ({ title }: { title: string }) => {
  return (
    <>
      <PanelTitle>{title}</PanelTitle>
      <Stack>
        <div className="set">
          <TextTitle>Meedoen</TextTitle>
          <Text tone="light">
            Alle spelers moeten eerst naar pedago.game gaan.
          </Text>
        </div>
        <div>
          <TextTitle>Unieke code</TextTitle>
          <Text tone="light">
            Spelers kunnen meedoen met het spel door de code in te vullen die
            straks verschijnt.
          </Text>
        </div>
        <div>
          <TextTitle>Scherm delen</TextTitle>
          <Text tone="light">
            Het is handig om je scherm te delen, zodat spelers ten alle tijden
            zien of ze al meedoen, of wat de code is.
          </Text>
        </div>
        <div>
          <TextTitle>Spel starten</TextTitle>
          <Text tone="light">
            Wanneer je het spel start kun je niet meer terug.
          </Text>
        </div>
        <div>
          <TextTitle>‘Locken’</TextTitle>
          <Text tone="light">
            Er is een slotje naast de startknop die je kunt indrukken om te
            voorkomen dat er nog meer mensen mee gaan doen.
          </Text>
        </div>
        <div>
          <TextTitle>Spelers verwijderen</TextTitle>
          <Text tone="light">
            Spelers kunnen worden gekickt wanneer ze niet welkom zijn, door er
            op te klikken of tappen.
          </Text>
        </div>
        <div>
          <TextTitle>Instellingen aanpassen</TextTitle>
          <Text tone="light">
            De timer kan worden uitgeschakeld en de groepsnamen kunnen worden
            aangepast.
          </Text>
        </div>
      </Stack>
    </>
  );
};

export const GameOnboarding = ({ handleOk }: { handleOk: () => void }) => {
  return (
    <Page>
      <Panel>
        <GameInfo title="Voor we beginnen" />
        <Button onClick={handleOk}>Ik snap het</Button>
      </Panel>
    </Page>
  );
};
