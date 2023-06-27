import { CheckCircle, Lock } from 'phosphor-react'
import {isPast, format} from 'date-fns'
import { Link } from "react-router-dom"

interface LessonProps {
  title: string;
  slug: string;
  availabeAt: Date;
  type: 'live' | 'class';

}
export function Lesson(props: LessonProps) {
  const isLessonavailabe = isPast(props.availabeAt);
  const availableDateFormatted = format(props.availabeAt, "EEEE' • '")

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
        {props.availabeAt.toString()}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
        <header className="flex items-center justify-between">
          {isLessonavailabe ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>

          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          
          <span className="text-xs rounded py-[2px] px-2 text-white border border-green-300">
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">
          {props.title}
        </strong>
      </div>
    </Link>
  )
}