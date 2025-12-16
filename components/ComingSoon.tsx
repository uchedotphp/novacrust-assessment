import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ComingSoon = () => {
  return (
    <div className="space-y-[30px]">
      <div className="space-y-[17px]">
        <h2 className="text-center text-nova-green-500 text-[32px] font-medium">
          Coming Soon!
        </h2>
        <p className="text-center font-outfit font-normal text-[20px] text-nova-gray-500">
          Cash to Crypto is almost here. <br /> Enter your email and we’ll let
          you know the moment it’s live.
        </p>
      </div>

      <form className="space-y-20">
        <div className="space-y-4">
          <Label className="form-label">Email</Label>
          <Input type="email" placeholder="Enter your email" />
        </div>

        <Button type="button" className="w-full">
          Update me
        </Button>
      </form>
    </div>
  );
};

export default ComingSoon;
