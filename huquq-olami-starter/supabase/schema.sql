-- HUQUQ OLAMI: Supabase SQL Editor ichida ishga tushiring.
create table if not exists public.profiles (
 id uuid primary key references auth.users(id) on delete cascade,
 full_name text not null default '',
 grade int check (grade in (8,9,11)),
 role text not null default 'student' check (role in ('student','teacher','admin')),
 created_at timestamptz not null default now()
);
create table if not exists public.lessons (
 id uuid primary key default gen_random_uuid(),
 grade int not null check (grade in (8,9,11)),
 title text not null,
 goal text not null default '',
 body text not null default '',
 terms text[] not null default '{}',
 example text not null default '',
 published boolean not null default false,
 created_by uuid references auth.users(id),
 created_at timestamptz not null default now()
);
create table if not exists public.quizzes (
 id uuid primary key default gen_random_uuid(),
 grade int not null check (grade in (8,9,11)),
 title text not null,
 created_at timestamptz not null default now()
);
create table if not exists public.questions (
 id uuid primary key default gen_random_uuid(),
 quiz_id uuid not null references public.quizzes(id) on delete cascade,
 question text not null,
 options jsonb not null,
 correct_index int not null check (correct_index between 0 and 3),
 explanation text not null default ''
);
create table if not exists public.results (
 id uuid primary key default gen_random_uuid(),
 student_id uuid not null references auth.users(id) on delete cascade,
 quiz_id uuid references public.quizzes(id) on delete set null,
 score int not null,
 total int not null,
 percent numeric(5,2) not null,
 created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
alter table public.lessons enable row level security;
alter table public.quizzes enable row level security;
alter table public.questions enable row level security;
alter table public.results enable row level security;
create policy "profiles read own" on public.profiles for select to authenticated using (auth.uid()=id);
create policy "profiles update own" on public.profiles for update to authenticated using (auth.uid()=id) with check (auth.uid()=id);
create policy "published lessons readable" on public.lessons for select using (published=true);
create policy "quizzes readable" on public.quizzes for select to anon,authenticated using (true);
create policy "questions readable" on public.questions for select to anon,authenticated using (true);
create policy "students read own results" on public.results for select to authenticated using (auth.uid()=student_id);
create policy "students insert own results" on public.results for insert to authenticated with check (auth.uid()=student_id);
-- Admin/teacher yozish siyosatlarini role claim yoki xavfsiz is_admin() funksiyasi bilan
-- alohida qo‘shing. Faqat frontenddagi rol tekshiruviga ishonmang.
