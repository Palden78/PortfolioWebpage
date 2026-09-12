import JournalProgress from "./JournalProgress";
import PageTransition from "./PageTransition";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageTransition>
      <JournalProgress />
      {children}
    </PageTransition>
  );
}