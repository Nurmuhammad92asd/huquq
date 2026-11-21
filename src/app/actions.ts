'use server'

import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

// Harakat 1: O'quvchi test natijalarini saqlash
export async function saveResult(formData: FormData) {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return { error: 'Iltimos, avval tizimga kiring' }
  }

  const quizId = formData.get('quizId') as string
  const score = Number(formData.get('score'))
  const total = Number(formData.get('total'))
  const percent = total > 0 ? (score / total) * 100 : 0

  const { error } = await supabase.from('results').insert({
    student_id: user.id,
    quiz_id: quizId,
    score,
    total,
    percent,
  })

  if (error) {
    return { error: error.message }
  }

  // Natijalar sahifasi keshini yangilash
  revalidatePath('/results')
  return { success: true }
}

// Harakat 2: Yangi test yaratish (admin uchun)
export async function createQuiz(formData: FormData) {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return { error: 'Ruxsat yo\'q' }
  }

  const title = formData.get('title') as string
  const grade = Number(formData.get('grade'))

  const { error } = await supabase.from('quizzes').insert({
    title,
    grade,
  })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/tests')
  return { success: true }
}
