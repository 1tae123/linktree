import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* 밝은 테두리 + 부드러운 그림자 두 겹으로 살짝 떠 있는 느낌을 줍니다 */}
      <div className="rounded-full bg-gradient-to-b from-white to-white/40 p-[5px] shadow-[0_2px_4px_rgba(120,70,40,0.08),0_18px_40px_-12px_rgba(120,70,40,0.35)] dark:from-white/25 dark:to-white/5 dark:shadow-[0_2px_4px_rgba(0,0,0,0.3),0_18px_40px_-12px_rgba(0,0,0,0.7)]">
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={208}
          height={208}
          priority
          className="h-[6.5rem] w-[6.5rem] rounded-full object-cover"
        />
      </div>
      <h1 className="mt-6 text-[1.625rem] font-bold tracking-[-0.02em] text-stone-900 dark:text-stone-50">
        {name}
      </h1>
      <p className="mt-2 max-w-[18rem] text-[15px] leading-relaxed text-stone-500 dark:text-stone-400">
        {bio}
      </p>
    </header>
  );
}
