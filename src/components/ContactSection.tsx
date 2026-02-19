import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AnimatedSection } from "@/components/AnimatedSection";

const eventTypes = [
  "Aniversário Infantil",
  "Aniversário Adulto",
  "Chá de Bebê",
  "Chá Revelação",
  "Noivado",
  "Formatura",
  "Outro",
];

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Telefone inválido" })
    .max(20, { message: "Telefone inválido" })
    .regex(/^[\d\s\(\)\-\+]+$/, { message: "Telefone contém caracteres inválidos" }),
  date: z.date({ required_error: "Selecione a data da festa" }),
  eventType: z.string().min(1, { message: "Selecione o tipo de evento" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", eventType: "" },
  });

  const onSubmit = (data: ContactFormData) => {
    const dateStr = format(data.date, "dd/MM/yyyy", { locale: ptBR });
    const message = `Olá, Mah Festeira! 🎉\n\nGostaria de solicitar um orçamento:\n\n*Nome:* ${data.name}\n*Telefone:* ${data.phone}\n*Tipo de evento:* ${data.eventType}\n*Data da festa:* ${dateStr}\n\nAguardo seu contato!`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5511940809869?text=${encoded}`, "_blank");
  };

  return (
    <section id="orcamento" className="py-20 px-4 bg-muted/50">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Solicite seu <span className="text-primary">Orçamento</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Preencha o formulário e entraremos em contato pelo WhatsApp! 💬
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="bg-card rounded-3xl border border-border p-8 shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Nome */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-display font-semibold">Nome completo</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Seu nome"
                          className="rounded-xl h-12"
                          maxLength={100}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Telefone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-display font-semibold">WhatsApp / Telefone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="(11) 99999-9999"
                          className="rounded-xl h-12"
                          maxLength={20}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Tipo de evento */}
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-display font-semibold">Tipo de evento</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-xl h-12">
                            <SelectValue placeholder="Selecione o tipo de evento" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {eventTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Data da festa */}
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="font-display font-semibold">Data da festa</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "h-12 rounded-xl pl-4 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? format(field.value, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                                : "Selecione a data"}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            locale={ptBR}
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full font-display font-semibold py-6 text-lg bg-festa-green hover:bg-festa-green/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Enviar pelo WhatsApp
                </Button>
              </form>
            </Form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
