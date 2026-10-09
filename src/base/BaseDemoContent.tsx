import { Badge } from "./Badge";
import { Hr } from "./Hr";
import { IconBadge } from "./IconBadge";
import {
  CheckCircleIcon,
  CheckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { Rating } from "./Rating";

export const BaseDemoContent = () => (
  <div className="space-y-4">
    <div className="flex flex-wrap items-center gap-2">
      <Badge color="yellow">Yellow</Badge>
      <Badge color="green">Green</Badge>
      <Badge color="red">Red</Badge>
      <Badge color="blue">Blue</Badge>
      <Badge color="purple">Purple</Badge>
      <Badge color="orange">Orange</Badge>
      <Badge color="pink">Pink</Badge>
      <Badge color="gray">Gray (default)</Badge>
      <Badge color="black">Black</Badge>
      <Badge color="white">White</Badge>
      <Badge color="code">Code</Badge>
    </div>

    <div className="flex flex-wrap items-center gap-2">
      <Badge size="sm">sm (default)</Badge>
      <Badge size="md">md</Badge>
      <Badge size="lg">lg</Badge>
    </div>

    <div className="flex flex-wrap items-center gap-2">
      <IconBadge
        color="green"
        icon={CheckIcon}
      />
      <IconBadge
        color="green"
        size="md"
        icon={CheckIcon}
      />
      <IconBadge
        color="green"
        size="lg"
        icon={CheckIcon}
      />
      <IconBadge
        color="yellow"
        icon={ExclamationTriangleIcon}
      >
        Warning
      </IconBadge>
      <IconBadge
        color="yellow"
        size="md"
        icon={ExclamationTriangleIcon}
      >
        Warning
      </IconBadge>
      <IconBadge
        color="yellow"
        size="lg"
        icon={ExclamationTriangleIcon}
      >
        Warning
      </IconBadge>
      <IconBadge
        color="green"
        icon={<CheckCircleIcon className="size-4" />}
      >
        Node icon
      </IconBadge>
    </div>

    <div>
      <Hr spacing="sm" />
      <Hr spacing="md" />
      <Hr spacing="lg" />
    </div>

    <div>
      <Rating rating={0} />
      <Rating rating={1} />
      <Rating rating={3} />
      <Rating rating={4} />
      <Rating rating={5} />
      <Rating
        rating={0}
        base={10}
      />
      <Rating
        rating={3}
        base={10}
      />
      <Rating
        rating={10}
        base={10}
      />
      <Rating
        rating={10}
        base={20}
      />
    </div>
  </div>
);
