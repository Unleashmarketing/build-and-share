CREATE TABLE public.visitor_counter (
  id integer PRIMARY KEY DEFAULT 1,
  count bigint NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT visitor_counter_single_row CHECK (id = 1)
);

GRANT SELECT ON public.visitor_counter TO anon, authenticated;
GRANT ALL ON public.visitor_counter TO service_role;

ALTER TABLE public.visitor_counter ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read visitor counter"
ON public.visitor_counter FOR SELECT
TO anon, authenticated
USING (true);

INSERT INTO public.visitor_counter (id, count) VALUES (1, 15275);

CREATE OR REPLACE FUNCTION public.increment_visitor_count()
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_count bigint;
BEGIN
  UPDATE public.visitor_counter
  SET count = count + 1, updated_at = now()
  WHERE id = 1
  RETURNING count INTO new_count;
  RETURN new_count;
END;
$$;

GRANT EXECUTE ON FUNCTION public.increment_visitor_count() TO anon, authenticated;