import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CryptoToCash from "./CryptoToCash";
import ComingSoon from "@/components/ComingSoon";

const Converter = () => {
  return (
    <Dialog defaultOpen={true}>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="font-bold text-base">
            Start converting
          </Button>
        </DialogTrigger>

        <DialogContent
          showCloseButton={false}
          className="sm:max-w-[640px] max-h-full pt-10 pb-14 px-16 rounded-nova-30 bg-white"
        >
          <DialogHeader>
            <DialogTitle className="sr-only">Crypto Converter</DialogTitle>
            <DialogDescription className="sr-only">
              Convert your crypto to cash or cash to crypto.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="cash">
            <TabsList className="bg-nova-gray-200 font-medium text-nova-gray-50 text-sm mx-auto mb-10">
              <TabsTrigger value="cash">Crypto to cash</TabsTrigger>
              <TabsTrigger value="crypto">Cash to crypto</TabsTrigger>
              <TabsTrigger value="fiat">Crypto to fiat loan</TabsTrigger>
            </TabsList>

            <TabsContent value="cash">
              <CryptoToCash />
            </TabsContent>

            <TabsContent value="crypto">
              <ComingSoon />
            </TabsContent>

            <TabsContent value="fiat">
              <ComingSoon />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default Converter;
