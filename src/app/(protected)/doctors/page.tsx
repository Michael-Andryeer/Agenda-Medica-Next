import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/page-container";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

const DoctorsPage = () => {
  return (
    <PageContainer>
      <PageHeaderContent>
        <PageTitle>Médicos</PageTitle>
        <PageDescription>Gerencie os médicos da sua clínica</PageDescription>
      </PageHeaderContent>
      <PageActions>
        <Button>
          <PlusIcon className="" />
          Novo médico
        </Button>
      </PageActions>
      <PageContent>
        <h1>Médicos</h1>
      </PageContent>
    </PageContainer>
  );
};

export default DoctorsPage;
