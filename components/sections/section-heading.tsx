import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Stack } from "@/components/ui/stack";

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <Stack gap="sm" className="mb-12 max-w-2xl">
      <Heading level={2}>{title}</Heading>
      <Text variant="muted">{subtitle}</Text>
    </Stack>
  );
}
