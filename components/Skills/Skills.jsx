import SkillBadge from "./SkillBadge";

export default function Skills() {
  return (
    <div className="px-20 py-8 flex flex-col gap-4">
      <h3 className="text-2xl font-bold">Skills</h3>
      <div className="flex gap-3 flex-wrap">
        <SkillBadge />
        <SkillBadge />
        <SkillBadge />
        <SkillBadge />
      </div>
    </div>
  );
}
